// 顯示模態框
function showModal(product) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    modal.style.display = 'block';

    // 根據產品類別動態載入內容
    let content = '';
    switch (product) {
        case 'brp':
            content = `<h2>BRP汰役電池降階利用</h2><img src="images/01_BRP.png" alt="BRP"><p>60V電池組電池模組(SOH)檢測，符合UL 1974安全認證。</p>`;
            break;
        case 'trp':
            content = `<h2>TRP電池組預警系統</h2><img src="images/02_TRP電池組預警系統.png" alt="TRP"><p>30分鐘預警潛在風險，結合AI監控。</p>`;
            break;
        case 'storage':
            content = `<h2>錶後儲能系統</h2><p>涵蓋：</p><ul><li><strong>企業儲能</strong><br><img src="images/03_(1)企業儲能.png" alt="企業儲能"></li><li><strong>旅館儲能</strong><br><img src="images/03_(2)旅館儲能.png" alt="旅館儲能"></li><li><strong>宮廟儲能</strong><br><img src="images/03_(3)宮廟儲能.png" alt="宮廟儲能"></li><li><strong>夜市儲能</strong><br><img src="images/03_(4)夜市儲能.png" alt="夜市儲能"></li></ul>`;
            break;
        case 'charger':
            content = `<h2>充電樁</h2><img src="images/04_充電樁.png" alt="充電樁"><p>DC 48-600V，200kW功率，CAN/RS485通訊。</p>`;
            break;
        case 'discharge':
            content = `<h2>動力電池自動放電裝置</h2><img src="images/05_動力電池自動放電裝置.png" alt="Discharge"><p>10分鐘內完成安全放電。</p>`;
            break;
        case 'construction':
            content = `<h2>儲能建置工程</h2><img src="images/06_儲能建置工程.png" alt="Construction"><p>30%電費節省，符合ESG標準。</p>`;
            break;
    }
    modalContent.innerHTML = content;
}

// 關閉模態框
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// 點擊模態框外部關閉
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}