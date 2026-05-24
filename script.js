document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lucide Icons
    lucide.createIcons();
    
    // File Upload Preview
    const fileInput = document.getElementById('image-input');
    const previewContainer = document.getElementById('preview-display');
    const placeholderText = previewContainer.querySelector('.preview-placeholder');

    fileInput.addEventListener('change', (event) => {
        const selectedFile = event.target.files[0];
        
        if (selectedFile) {
            const fileReader = new FileReader();
            
            fileReader.onload = (e) => {
                previewContainer.style.backgroundImage = `url(${e.target.result})`;
                if (placeholderText) {
                    placeholderText.style.display = 'none';
                }
            };
            
            fileReader.readAsDataURL(selectedFile);
        }
    });

    // Live Text Preview elements
    const inputName = document.getElementById('product-name');
    const inputDesc = document.getElementById('product-desc');
    const inputPrice = document.getElementById('product-price');
    const inputStock = document.getElementById('product-stock');
    
    const previewTitle = document.getElementById('preview-title');
    const previewDesc = document.getElementById('preview-desc');
    const previewPriceText = document.getElementById('preview-price-text');
    const previewStockText = document.getElementById('preview-stock-text');

    inputName.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (value.length > 0) {
            previewTitle.textContent = value;
            previewTitle.classList.remove('skeleton-long');
        } else {
            previewTitle.textContent = '';
            previewTitle.classList.add('skeleton-long');
        }
    });

    inputDesc.addEventListener('input', (e) => {
        const value = e.target.value.trim();
        if (value.length > 0) {
            previewDesc.textContent = value;
            previewDesc.classList.remove('skeleton-short');
        } else {
            previewDesc.textContent = '';
            previewDesc.classList.add('skeleton-short');
        }
    });

    inputPrice.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value !== '') {
            const formattedPrice = new Intl.NumberFormat('id-ID').format(value);
            previewPriceText.textContent = `Rp ${formattedPrice}`;
        } else {
            previewPriceText.textContent = 'Rp 0';
        }
    });

    inputStock.addEventListener('input', (e) => {
        const value = e.target.value;
        if (value !== '') {
            previewStockText.textContent = `Stock: ${value}`;
        } else {
            previewStockText.textContent = 'Stock: 0';
        }
    });

    // Profile Dropdown Toggle Logic
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');

    profileTrigger.addEventListener('click', (event) => {
        event.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    window.addEventListener('click', (event) => {
        if (!profileTrigger.contains(event.target)) {
            profileDropdown.classList.remove('show');
        }
    });
});
