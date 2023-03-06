import { error } from "@sveltejs/kit";
import { env } from "$env/dynamic/public";

export async function load({ url }) {
  const requestedExportId = url.searchParams.get("export-id");
  let exportParams;
  if (requestedExportId) {
    const getExportParamsUri = `${env.PUBLIC_EXPORT_URI}exportparams?export-id=${requestedExportId}`;
    fetch(getExportParamsUri)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.status && res.status === "Not found") {
          throw error(404, "Export params not found");
        }
        exportParams = res;
      })
      .catch(err => console.error(err));
  }

  return {
    exportParams
  };
}
