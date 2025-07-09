import { ScrollReveal } from "@/components/scroll-reveal";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  customDevelopmentServices,
  installAndSetupScript,
  primaryServices,
  reSkinServices,
  vpsServerSetupService,
  wordpressWebsiteServices,
} from "@/lib/services";
import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";

type FormDataType = {
  name: string;
  email: string;
  country: string;
  service: string;
  subService: string;
  estimatedCost: string;
  requirements: string;
  extraPage: string;
  turnstileToken: string;
};

type Props = {
  setFormData: (data: Partial<FormDataType>) => void;
  formData: FormDataType;
  control: Control<FormDataType>;
  errors: any;
};

const ServiceSelect = ({ setFormData, formData, control, errors }: Props) => {
  // State to track the selected primary service
  const [selectedPrimaryService, setSelectedPrimaryService] = useState<
    string | null
  >(formData.service || null);
  // State to track the estimated cost (as number for calculations)
  const [estimatedCost, setEstimatedCost] = useState<number | null>(
    formData.estimatedCost ? parseFloat(formData.estimatedCost) : null
  );

  // Map primary service labels to their sub-services
  const subServiceMap: Record<string, { label: string; price?: number }[]> = {
    "Create WordPress Website": wordpressWebsiteServices,
    "Install & Setup PHP Script": installAndSetupScript,
    "ReSkin/Customize Android Source Code": reSkinServices,
    "Custom Development": customDevelopmentServices,
    "VPS Server Setup": vpsServerSetupService,
  };

  // Handle primary service change
  const handlePrimaryServiceChange = (value: string) => {
    setSelectedPrimaryService(value);
    const selectedService = primaryServices.find(
      (service) => service.label === value
    );
    const subServices = subServiceMap[value];
    const defaultSubService =
      subServices && subServices.length > 0 ? subServices[0].label : "";
    const defaultCost =
      subServices &&
      subServices.length > 0 &&
      subServices[0].price !== undefined
        ? subServices[0].price
        : selectedService?.price || 0;

    setEstimatedCost(defaultCost);
    setFormData({
      service: value,
      subService: defaultSubService,
      estimatedCost: defaultCost.toString(),
      extraPage: "",
    });
  };

  // Handle sub-service change
  const handleSubServiceChange = (value: string) => {
    const subServices = subServiceMap[selectedPrimaryService!];
    const selectedSubService = subServices.find(
      (service) => service.label === value
    );
    const newCost =
      (selectedSubService?.price ||
        primaryServices.find(
          (service) => service.label === selectedPrimaryService
        )?.price ||
        0) +
      (parseInt(formData.extraPage) || 0) * 20;

    setEstimatedCost(newCost);
    setFormData({
      subService: value,
      estimatedCost: newCost.toString(),
    });
  };

  // Handle extra page change
  const handleExtraPageChange = (value: string) => {
    const extraPageCount = parseInt(value) || 0;
    const baseCost = estimatedCost || 0;
    const newCost =
      baseCost - (parseInt(formData.extraPage) || 0) * 20 + extraPageCount * 20;

    setEstimatedCost(newCost);
    setFormData({
      extraPage: value,
      estimatedCost: newCost.toString(),
    });
  };

  // Determine if a sub-service dropdown should be shown
  const showSubService =
    selectedPrimaryService && subServiceMap[selectedPrimaryService]?.length > 0;

  return (
    <ScrollReveal delay={400}>
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary border-b border-primary/20 pb-2">
          Service Requirements
        </h3>
        <div className="space-y-2">
          <Label htmlFor="service" className="text-sm font-medium">
            Primary Service Needed *
          </Label>
          <Controller
            name="service"
            control={control}
            rules={{ required: "Primary Service is required" }}
            render={({ field }) => (
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  handlePrimaryServiceChange(value);
                }}
                value={field.value}
              >
                <SelectTrigger
                  id="service"
                  className={`h-12 border-2 border-gray-200 focus:border-primary ${
                    errors.service ? "border-red-500" : ""
                  }`}
                >
                  <SelectValue placeholder="Select your primary service" />
                </SelectTrigger>
                <SelectContent>
                  {primaryServices.map((service) => (
                    <SelectItem key={service.label} value={service.label}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service && (
            <p className="text-sm text-red-500">{errors.service.message}</p>
          )}
        </div>

        {/* Sub-Service Dropdown (Conditional) */}
        {showSubService && (
          <div className="space-y-2">
            <Label htmlFor="subService" className="text-sm font-medium">
              {selectedPrimaryService === "Create WordPress Website"
                ? "WordPress Website Type *"
                : selectedPrimaryService === "Install & Setup PHP Script"
                ? "PHP Script Installation Details"
                : selectedPrimaryService ===
                  "ReSkin/Customize Android Source Code"
                ? "Android Source Code Type *"
                : selectedPrimaryService === "Custom Development"
                ? "Custom Development Type *"
                : "VPS Server Setup Details"}
            </Label>
            {selectedPrimaryService === "Install & Setup PHP Script" ? (
              <p className="text-muted-foreground">
                {installAndSetupScript[0].label}
              </p>
            ) : selectedPrimaryService === "VPS Server Setup" ? (
              <div>
                <h2 className="text-center font-bold text-xl">VPS Hosting</h2>
                <p className="text-muted-foreground">
                  {vpsServerSetupService[0].label}
                </p>
              </div>
            ) : (
              <Controller
                name="subService"
                control={control}
                rules={{
                  required:
                    selectedPrimaryService === "Create WordPress Website" ||
                    selectedPrimaryService ===
                      "ReSkin/Customize Android Source Code" ||
                    selectedPrimaryService === "Custom Development"
                      ? "Sub-service is required"
                      : false,
                }}
                render={({ field }) => (
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      handleSubServiceChange(value);
                    }}
                    value={field.value}
                  >
                    <SelectTrigger
                      id="subService"
                      className={`h-12 border-2 border-gray-200 focus:border-primary ${
                        errors.subService ? "border-red-500" : ""
                      }`}
                    >
                      <SelectValue placeholder="Select a specific service" />
                    </SelectTrigger>
                    <SelectContent>
                      {subServiceMap[selectedPrimaryService!].map(
                        (subService) => (
                          <SelectItem
                            key={subService.label}
                            value={subService.label}
                          >
                            {subService.label}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                )}
              />
            )}
            {errors.subService && (
              <p className="text-sm text-red-500">
                {errors.subService.message}
              </p>
            )}
          </div>
        )}

        {/* Extra Pages Input */}
        {selectedPrimaryService === "Create WordPress Website" && (
          <div className="flex items-center">
            <div className="bg-gray-200 py-[13px] px-4 text-nowrap">
              Extra Pages
            </div>
            <Controller
              name="extraPage"
              control={control}
              rules={{
                validate: (value) =>
                  !value || parseInt(value) >= 0
                    ? true
                    : "Extra pages must be a non-negative number",
              }}
              render={({ field }) => (
                <input
                  type="number"
                  className={`w-full border py-3 px-4 outline-none ${
                    errors.extraPage ? "border-red-500" : ""
                  }`}
                  min={0}
                  onChange={(e) => {
                    field.onChange(e);
                    handleExtraPageChange(e.target.value);
                  }}
                  value={field.value}
                />
              )}
            />
            {errors.extraPage && (
              <p className="text-sm text-red-500">{errors.extraPage.message}</p>
            )}
          </div>
        )}

        {/* Estimated Cost */}
        {formData.estimatedCost &&
          selectedPrimaryService !== "Custom Development" && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Estimated Cost</Label>
              <div className="text-lg font-semibold w-full bg-gray-100 rounded-sm px-3 flex items-center">
                <p className="text-black border-r pr-2 py-3">$</p>
                <p className="text-lg font-semibold text-primary pl-2">
                  {formData.estimatedCost}
                </p>
              </div>
            </div>
          )}
      </div>
    </ScrollReveal>
  );
};

export default ServiceSelect;
