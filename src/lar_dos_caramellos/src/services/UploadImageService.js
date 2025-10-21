export default function UploadImageService(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject("Por favor enviar apenas imagens");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result); // retorna a Base64
    };

    reader.onerror = () => {
      reject("Erro ao ler arquivo");
    };

    reader.readAsDataURL(file);
  });
}




