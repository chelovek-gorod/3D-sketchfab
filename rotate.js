const stepSize = 5;

const iframe = document.querySelector('iframe.c-viewer__iframe');
const canvas = iframe.contentWindow.document.querySelector('canvas.canvas');

const canvasDiv = document.querySelector('.viewer-wrapper');

const btnLeft = document.createElement('button')
btnLeft.style = `display: inline-block; width: 30px; text-align: center;`
btnLeft.innerText = '<'
btnLeft.onclick = () => simulateCanvasDrag(100, 10, 100 - stepSize, 10);
canvasDiv.append(btnLeft)

const x_value = document.createElement('span')
x_value.style = `display: inline-block; text-align: center; width: 50px;`
x_value.innerText = 0
canvasDiv.append(x_value)

const btnRight = document.createElement('button')
btnRight.style = `display: inline-block; width: 30px; text-align: center;`
btnRight.innerText = '>'
btnRight.onclick = () => simulateCanvasDrag(10, 10, 10 + stepSize, 10);
canvasDiv.append(btnRight)

const btnResetX = document.createElement('button')
btnResetX.style = `margin-left: 30px;`
btnResetX.innerText = 'reset x'
btnResetX.onclick = () => x_value.innerText = 0;
canvasDiv.append(btnResetX)

canvasDiv.append(document.createElement('br'))

const btnUp = document.createElement('button')
btnUp.style = `display: inline-block; width: 30px; text-align: center;`
btnUp.innerText = '^'
btnUp.onclick = () => simulateCanvasDrag(10, 100, 10, 100 - stepSize);
canvasDiv.append(btnUp)

const y_value = document.createElement('span')
y_value.style = `display: inline-block; text-align: center; width: 50px;`
y_value.innerText = 0
canvasDiv.append(y_value)

const btnDown = document.createElement('button')
btnDown.style = `display: inline-block; width: 30px; text-align: center;`
btnDown.innerText = '_'
btnDown.onclick = () => simulateCanvasDrag(10, 10, 10, 10 + stepSize);
canvasDiv.append(btnDown)

const btnResetY = document.createElement('button')
btnResetY.style = `margin-left: 30px;`
btnResetY.innerText = 'reset y'
btnResetY.onclick = () => y_value.innerText = 0;
canvasDiv.append(btnResetY)

function simulateCanvasDrag(startX, startY, endX, endY) {
    if (startX !== endX) x_value.innerText = +x_value.innerText + (startX - endX);
    else y_value.innerText = +y_value.innerText + (startY - endY);

    const dragStartEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
        clientX: startX,
        clientY: startY
    });

    const dragMoveEvent = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: endX,
        clientY: endY
    });

    const dragEndEvent = new MouseEvent('mouseup', {
        bubbles: true,
        cancelable: true,
        clientX: endX,
        clientY: endY
    });

    canvas.dispatchEvent(dragStartEvent);
    canvas.dispatchEvent(dragMoveEvent);
    canvas.dispatchEvent(dragEndEvent);
}
