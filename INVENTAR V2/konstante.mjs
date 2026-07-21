const BACKEND_HOST = "127.0.0.1";
const BACKEND_PORT = "3000";

function getBackendUrl() {
  return BACKEND_HOST + ":" +  BACKEND_PORT;
}

export { BACKEND_HOST, BACKEND_PORT, getBackendUrl };
