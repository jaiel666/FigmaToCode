/* Hosting/Domain/SEO/Email switch*/
const hostingItem = document.querySelector('.hosting1');
const domainItem = document.querySelector('.domain1');
const emailItem = document.querySelector('.email');
const seoItem = document.querySelector('.seo');
const premiumWebHostingContent = document.querySelector('.premium-web-hosting');
const blazingFastWebContent = document.querySelector('.blazing-fast-web1');
const breadCrunchItem = document.querySelector('.bread-crunch-item');

hostingItem.addEventListener('click', () => updateContent('Hosting', 'var(--color-firebrick)'));
domainItem.addEventListener('click', () => updateContent('Domain', 'var(--color-firebrick)'));
emailItem.addEventListener('click', () => updateContent('Email', 'var(--color-firebrick)'));
seoItem.addEventListener('click', () => updateContent('SEO', 'var(--color-firebrick)'));

function updateContent(category, color) {
  hostingItem.style.color = 'var(--color-lightgray)';
  domainItem.style.color = 'var(--color-lightgray)';
  emailItem.style.color = 'var(--color-lightgray)';
  seoItem.style.color = 'var(--color-lightgray)';

  switch (category) {
    case 'Hosting':
      hostingItem.style.color = color;
      moveBreadcrumbUnderCategory(hostingItem);
      premiumWebHostingContent.textContent = 'Premium Web Hosting for Your Website';
      blazingFastWebContent.textContent = 'Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.';
      break;
    case 'Domain':
      domainItem.style.color = color;
      moveBreadcrumbUnderCategory(domainItem);
      premiumWebHostingContent.textContent = 'Premium Domain for Your Website';
      blazingFastWebContent.textContent = 'Content for Domain Blazing Fast Web';
      break;
    case 'Email':
      emailItem.style.color = color;
      moveBreadcrumbUnderCategory(emailItem);
      premiumWebHostingContent.textContent = 'Premium Email for Your Website';
      blazingFastWebContent.textContent = 'Content for Email Blazing Fast Web';
      break;
    case 'SEO':
      seoItem.style.color = color;
      moveBreadcrumbUnderCategory(seoItem);
      premiumWebHostingContent.textContent = 'Premium SEO for Your Website';
      blazingFastWebContent.textContent = 'Content for SEO Blazing Fast Web';
      break;
    default:
      break;
  }
}

function moveBreadcrumbUnderCategory(categoryElement) {
  const categoryPosition = categoryElement.offsetLeft;
  let adjustedLeft = categoryPosition + 5;

  if (categoryElement.classList.contains('seo')) {
    adjustedLeft -= 14; 
  } else if (categoryElement.classList.contains('email')) {
    adjustedLeft -= 10; 
  }
  breadCrunchItem.style.left = `${adjustedLeft}px`;
}


/* Monthly and Yearly switch*/
const groupItem = document.querySelector('.group-item');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const plan1PriceMonthly = 2.80;
const plan2PriceMonthly = 4.20;
const plan3PriceMonthly = 7.00;
const discountPercentage = 0.2; 

groupItem.addEventListener('click', toggleMonthlyYearly);

function toggleMonthlyYearly() {
  const monthlyPosition = 409;
  const yearlyPosition = 455;

  const targetPosition = parseInt(groupItem.style.left) === monthlyPosition ? yearlyPosition : monthlyPosition;

  groupItem.style.transition = 'left 0.3s';
  groupItem.style.left = `${targetPosition}px`;


  setTimeout(() => {
    groupItem.style.transition = 'none';
    updatePricing(targetPosition);
  }, 300);
}
  

function updatePricing(position) {
  if (position === 409) {
    document.querySelector('.div').textContent = `$${(plan1PriceMonthly).toFixed(2)}`;
    document.querySelector('.div2').textContent = `$${(plan2PriceMonthly).toFixed(2)}`;
    document.querySelector('.div1').textContent = `$${(plan3PriceMonthly).toFixed(2)}`;
  } else {
    document.querySelector('.div').textContent = `$${((plan1PriceMonthly * 12) * (1 - discountPercentage)).toFixed(2)}`;
    document.querySelector('.div2').textContent = `$${((plan2PriceMonthly * 12) * (1 - discountPercentage)).toFixed(2)}`;
    document.querySelector('.div1').textContent = `$${((plan3PriceMonthly * 12) * (1 - discountPercentage)).toFixed(2)}`;
  }

  const periodLabel = position === 409 ? 'Per month' : 'Per year';
  document.querySelectorAll('.per-month').forEach(element => {
    element.textContent = periodLabel;
  });
}

/* Basic and Premium switch*/
const basicItem = document.querySelector('.basic');
const premiumItem = document.querySelector('.premium');
const groupChild1 = document.querySelector('.group-child1');

basicItem.addEventListener('click', () => updatePlanSelection('Basic'));
premiumItem.addEventListener('click', () => updatePlanSelection('Premium'));

function updatePlanSelection(plan) {
  groupChild1.style.backgroundColor = 'var(--color-silver)';
  if (plan === 'Basic') {
    groupChild1.style.left = '0'
    groupChild1.style.backgroundColor = 'var(--color-firebrick)';
  } else if (plan === 'Premium') {
    groupChild1.style.left = '443px';
    groupChild1.style.backgroundColor = 'var(--color-firebrick)';
  }
}
