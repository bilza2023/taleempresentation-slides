






export default function pieChart(ctx,item){
    const x = item.itemExtra.x;
    const y = item.itemExtra.y;
    const radius = item.itemExtra.radius;
    const data = JSON.parse(item.itemExtra.data);
    // const data = item.itemExtra.data;
    let startAngle = 0;

    const centerX = x;
    const centerY = y;
    const options = { drawLabelsOutside: false };

    // Save context state
    ctx.save();

    data.forEach(pie => {
        // Draw pie slice
        const endAngle = startAngle + (pie.percent / 100) * 2 * Math.PI;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = pie.color || '#000';
        ctx.fill();

        // Draw pie title
        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textX = centerX + Math.cos(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);
        const textY = centerY + Math.sin(midAngle) * (options.drawLabelsOutside ? radius + 20 : radius / 2);

        ctx.fillStyle = '#000';
        ctx.font = '14px Arial';
        ctx.fillText(pie.title, textX, textY);

        startAngle = endAngle;
    });

    // Restore context state
    ctx.restore();
    
}