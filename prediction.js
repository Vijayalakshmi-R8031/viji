document.getElementById("predictionForm").addEventListener("submit", function(e){
  e.preventDefault();

  const s1 = document.getElementById("symptom1").value.toLowerCase();
  const s2 = document.getElementById("symptom2").value.toLowerCase();
  const s3 = document.getElementById("symptom3").value.toLowerCase();

  const resultDiv = document.getElementById("result");
  let disease = "Unknown - Consult a doctor";

  // Simple demo rules
  if ((s1.includes("fever") || s2.includes("fever") || s3.includes("fever")) &&
      (s1.includes("cough") || s2.includes("cough") || s3.includes("cough"))) {
    disease = "Possible Flu";
  } else if ((s1.includes("headache") || s2.includes("headache") || s3.includes("headache")) &&
             (s1.includes("nausea") || s2.includes("nausea") || s3.includes("nausea"))) {
    disease = "Possible Migraine";
  } else if ((s1.includes("fever") || s2.includes("fever") || s3.includes("fever")) &&
             (s1.includes("rash") || s2.includes("rash") || s3.includes("rash"))) {
    disease = "Possible Chickenpox";
  }

  resultDiv.textContent = `Prediction Result: ${disease}`;
});
