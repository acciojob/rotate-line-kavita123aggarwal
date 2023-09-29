 const line = document.getElementById('line');
        let rotationAngle = 0;

        function rotateLine() {
            rotationAngle += 2;
            line.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
            requestAnimationFrame(rotateLine);
        }

        rotateLine();