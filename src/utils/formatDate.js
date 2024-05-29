export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  // Formatear fecha según localización
  return new Intl.DateTimeFormat("es-PE", options).format(date);
}
