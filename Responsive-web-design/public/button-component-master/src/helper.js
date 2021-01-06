export const btns = [
  { color: "primary", variant: "regular", size: "sm" },
  { color: "secondary", variant: "regular", size: "sm" },
  { color: "danger", variant: "regular", size: "sm" },
  { color: "primary", variant: "outline", size: "sm" },
  { color: "secondary", variant: "outline", size: "sm" },
  { color: "danger", variant: "outline", size: "sm" },
  { color: "primary", variant: "text", size: "sm" },
  { color: "secondary", variant: "text", size: "sm" },
  { color: "danger", variant: "text", size: "sm" },

  { color: "primary", variant: "regular", size: "md" },
  { color: "secondary", variant: "regular", size: "md" },
  { color: "danger", variant: "regular", size: "md" },
  { color: "primary", variant: "outline", size: "md" },
  { color: "secondary", variant: "outline", size: "md" },
  { color: "danger", variant: "outline", size: "md" },
  { color: "primary", variant: "text", size: "md" },
  { color: "secondary", variant: "text", size: "md" },
  { color: "danger", variant: "text", size: "md" },

  { color: "primary", variant: "regular", size: "lg" },
  { color: "secondary", variant: "regular", size: "lg" },
  { color: "danger", variant: "regular", size: "lg" },
  { color: "primary", variant: "outline", size: "lg" },
  { color: "secondary", variant: "outline", size: "lg" },
  { color: "danger", variant: "outline", size: "lg" },
  { color: "primary", variant: "text", size: "lg" },
  { color: "secondary", variant: "text", size: "lg" },
  { color: "danger", variant: "text", size: "lg" },
  {
    color: "primary",
    variant: "disabled",
    size: "sm",
    disabled: true,
  },
  {
    color: "secondary",
    variant: "disabled",
    size: "md",
    disabled: true,
  },
  {
    color: "danger",
    variant: "disabled",
    size: "lg",
    disabled: true,
  },
  {
    color: "default",
    variant: "Shadow",
    shadow: true,
    size: "md",
    disabled: false,
  },
  {
    color: "primary",
    variant: "primary",
    size: "md",
    startIcon:'phone',
    disabled: false,
  },
  {
    color: "primary",
    variant: "primary",
    size: "md",
    endIcon:"mail",
    disabled: false,
  },
];

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
