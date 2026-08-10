export default function getFullAddress(region: string, country: string, label?: string, label1?: string): string {

   return [label, label1, region, country ] .filter(Boolean).join(", ")
}