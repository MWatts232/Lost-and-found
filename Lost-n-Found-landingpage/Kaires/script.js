function randomizeMannequinPoses() {
  const cycleSeconds = 99;
  document.querySelectorAll(".mannequin-watch").forEach((side, sideIndex) => {
    const poses = Array.from(side.querySelectorAll("img"));
    for (let i = poses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [poses[i], poses[j]] = [poses[j], poses[i]];
    }
    const slotSeconds = cycleSeconds / poses.length;
    const sideOffset = sideIndex === 0 ? -0.2 : 3.8;
    poses.forEach((pose, index) => {
      side.append(pose);
      pose.style.animationDuration = `${cycleSeconds}s`;
      pose.style.animationDelay = `${sideOffset + index * slotSeconds}s`;
    });
  });
}

randomizeMannequinPoses();

const byId = (id) => document.getElementById(id);

function setDieFace(result) {
  const faceIndex = result - 1;
  const column = faceIndex % 4;
  const row = Math.floor(faceIndex / 4);
  const centersX = [193, 440.5, 684, 931];
  const centersY = [201, 450, 693, 933.5, 1175.5];
  const face = byId("dieFace");
  const width = face.clientWidth;
  const height = face.clientHeight;
  const scale = width * 5.75 / 1122;
  const scaleY = height * 7.1875 / 1402;
  const x = (width / 2 - centersX[column] * scale) / (width - width * 5.75) * 100;
  const y = (height / 2 - centersY[row] * scaleY) / (height - height * 7.1875) * 100;
  face.style.backgroundPosition = `${x}% ${y}%`;
}

setDieFace(20);

const rollButton = byId("rollDie");
const outcomes = {
  1: "A fumble. The tale begins in the wrong tavern.",
  20: "Natural twenty. The next chapter is yours.",
};
rollButton.addEventListener("click", () => {
  if (rollButton.classList.contains("is-rolling")) return;
  rollButton.classList.add("is-rolling");
  rollButton.disabled = true;
  const result = Math.floor(Math.random() * 20) + 1;
  window.setTimeout(() => {
    setDieFace(result);
    byId("dieResult").textContent = result;
    byId("rollMessage").textContent = outcomes[result] || (
      result >= 15 ? "A promising roll. Fortune leans your way." :
      result >= 8 ? "The road is uncertain. Keep your wits about you." :
      "The die is unkind. There is still another path."
    );
    byId("pageStatus").textContent = `The die lands on ${result}.`;
  }, 400);
  window.setTimeout(() => {
    rollButton.classList.remove("is-rolling");
    rollButton.disabled = false;
  }, 840);
});
