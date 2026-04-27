function openCertificationModal(imageSrc, title, verificationUrl) {
  if (typeof Swal === "undefined") {
    window.open(verificationUrl, "_blank");
    return;
  }

  Swal.fire({
    title: title,
    imageUrl: imageSrc,
    imageAlt: title,
    imageWidth: 700,
    imageHeight: 450,
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "View Verification",
    cancelButtonText: "Close",
    footer: `<a href="${verificationUrl}" target="_blank" rel="noopener">Open verification link</a>`,
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(verificationUrl, "_blank");
    }
  });
}
