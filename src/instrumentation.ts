
export async function register() {

   console.log("Instrumentation:");
   Object.entries(process.env)
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB)) // Ordena alfabeticamente pelas chaves
      .forEach(([key, value]) => console.log(key, ":", value));

}