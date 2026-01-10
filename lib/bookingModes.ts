// bookingModes.ts
export type BookingMode = "presential" | "phone" | "visio";

export const BOOKING_MODES: {
  id: BookingMode;
  label: string;
  description: string;
  available: boolean;
  note?: string;
}[] = [
  {
    id: "presential",
    label: "Présentiel",
    description: "Cabinet — Paris ou Nice",
    available: false,
    note: "Disponible uniquement à Paris et Nice",
  },
  {
    id: "phone",
    label: "Téléphone",
    description: "Échange confidentiel par appel",
    available: true,
  },
  {
    id: "visio",
    label: "Visio",
    description: "Consultation à distance",
    available: true,
  },
];
