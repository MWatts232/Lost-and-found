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
  1: "You swing. The air escapes unharmed.",
  2: "You search the room. Nothing. Not even a clue.",
  3: "The chest looks suspicious. It is just a chest.",
  4: "The lock holds. It has heard this before.",
  5: "Your lie is convincing. The guard is not.",
  6: "The trap goes off. At least it was the obvious one.",
  7: "You find the clue the party walked past twice.",
  8: "The plan works. One small detail is now on fire.",
  9: "The door opens. It was never locked.",
  10: "You get a yes, followed by several conditions.",
  11: "You make the jump. The landing is less heroic.",
  12: "The NPC agrees. The fee comes up after the handshake.",
  13: "You spot the ambush just before it spots you.",
  14: "That chest has teeth. Good call checking first.",
  15: "A solid hit. The enemy is taking you seriously.",
  16: "You pick the lock. The key was in your pocket.",
  17: "The plan works. The DM quietly adjusts the next room.",
  18: "You find the hidden door behind the suspicious tapestry.",
  19: "Perfect timing. The DM is checking the wording.",
  20: "Natural twenty. The ridiculous plan is now canon.",
};
rollButton.addEventListener("click", () => {
  if (rollButton.classList.contains("is-rolling")) return;
  rollButton.classList.add("is-rolling");
  rollButton.disabled = true;
  const result = Math.floor(Math.random() * 20) + 1;
  window.setTimeout(() => {
    setDieFace(result);
    byId("dieResult").textContent = result;
    byId("rollMessage").textContent = outcomes[result];
    byId("pageStatus").textContent = `The die lands on ${result}.`;
  }, 400);
  window.setTimeout(() => {
    rollButton.classList.remove("is-rolling");
    rollButton.disabled = false;
  }, 840);
});
