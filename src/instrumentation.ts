
export async function register() {

   console.log("Instrumentation registered", process.env.NEXT_RUNTIME);
   console.log("Enviroment", process.env.NODE_ENV);
   console.log("NEXT_PUBLIC_VARIAVEL_PUBLICA", process.env.NEXT_PUBLIC_VARIAVEL_PUBLICA);
   console.log("VARIAVEL_SERVER", process.env.VARIAVEL_SERVER);


}