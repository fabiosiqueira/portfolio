
export async function register() {

   console.log("Instrumentation:");
   Object.entries(process.env).forEach(entries => console.log(entries[0], ":", entries[1]));

}