const options = [
  {
    title: "Unlimited Access",
    subtitle: "Keep interacting with your valuable customers data easily.",
    img: "https://framerusercontent.com/images/ttpD30XqEO6uh1P3oWCnDjkfdI.png",
  },
  {
    title: "No hidden cost",
    subtitle: "Pay only for customization, new feature(s), and hosting.",
    img: "https://framerusercontent.com/images/0LyipngyKBfMmnwSMAVpxuGvKAY.png",
  },
  {
    title: "24 hours support",
    subtitle: "Our support team is dedicated to solve customer isues.",
    img: "https://framerusercontent.com/images/KFBLucgzFRR5A85outryl1Xhl3c.png",
  },
];

const techStacks = [
  {
    title: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
  },
  {
    title: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  },
  {
    title: "Frappe",
    img: "https://asset.brandfetch.io/ido_MaRDZj/idks6goaHO.png",
  },
  {
    title: "ERPNext",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMF4one3RUl4VRVMmr8cGD5jjoTFTnc_5pZjUrJjgSkw&s",
  },
  {
    title: "Redis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqwSW7may4JNLWK04hXLWSCF7zhRqIFcNh4XvK3tCx0g&s",
  },
  {
    title: "Node js",
    img: "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  },
  {
    title: "Docker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXxfOg7VlfiCZEZAWqvzSFNKzzsun9SSAi3FUss550xQ&s",
  },
  {
    title: "Git",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKMky7hnRbgrnuDKfBnatDymtb93vbAegkiFo8AX8dA&s",
  },
];

const cards = [
  {
    title: "Make it your own ERP",
    subtitle:
      "ERPNext is the world's best free and open source ERP. We can help you deploying and customizing to meet your business requirements.",
    href: "/contact",
  },
  {
    title: "Understand the logic",
    subtitle:
      "The most agile ERP on the planet. We advice you learn more about ERPNext and other Frappe products for better information.",
    href: "/learn",
  },
];
const modules = [
  {
    developer: "ERPNext",
    name: "SupplyChain",
    href: "/learn/supply-chain",
    image: "https://nestorbird.com/assets/images/Erpimg3.webp",
    title: "Supply Chain System",
    description:
      "End-to-end supply chain management from procurement to transactions to logistics",
    bg: "#bbf7d0",
    banner:
      "https://img.freepik.com/free-photo/still-life-supply-chain-representation_23-2149827264.jpg?t=st=1717175410~exp=1717179010~hmac=8c6e15c350c7b19f68522bd34a06dacd669a43d00a1796d35d385e5b998eeb9d&w=1800",
  },
  {
    developer: "ERPNext",
    name: "Accounting",
    href: "/learn/accounting",
    image: "https://nestorbird.com/assets/images/Erpimg1.webp",
    title: "Financial Accounting",
    description:
      "Monitor financial account, manage cash flows check balance and more.",
    bg: "#dcfce7",
    banner:
      "https://img.freepik.com/free-photo/flat-lay-business-concept_53876-24738.jpg?t=st=1717176947~exp=1717180547~hmac=d53773b4e5b4a5aab00abef268cd020bc8942431fde5268734d1cececa199a71&w=2000",
  },

  {
    developer: "ERPNext",
    name: "Inventory",
    href: "/learn/stock",
    image: "https://nestorbird.com/assets/images/Erpimg5.webp",
    title: "Inventory",
    description: "Fully automated powerful inventory management solution.",
    bg: "#ffedd5",
    banner:
      "https://img.freepik.com/free-photo/african-american-worker-writing-inventory-list-while-checking-stock-storage-room_637285-4716.jpg?t=st=1717176978~exp=1717180578~hmac=fc4bf2d9a36cc11b7bfe784dac6fb67fa429a1e466bab0dd555c262d12065b27&w=1800",
  },
  {
    developer: "ERPNext",
    name: "Buying",
    href: "/learn/buying",
    image: "https://nestorbird.com/assets/images/Erpimg3.webp",
    title: "Procurement",
    description:
      "Suppliers are companies or individuals who provide you with products or services. EL-ERP provides a standalone portal for suppliers interactions and inline supplier.",
    bg: "#fed7aa",
    banner:
      "https://img.freepik.com/free-photo/handshake-man-woman-after-signing-business-contract-closeup_1163-5133.jpg?t=st=1717177274~exp=1717180874~hmac=ea883a1e7b36e97cb858ba71a732f7bb6b490fbf46a2a301cb896e1896acc6a5&w=1800",
  },
  {
    developer: "ERPNext",
    name: "Selling",
    href: "/learn/selling",
    image: "https://nestorbird.com/assets/images/Erpimg2.webp",
    title: "Selling",
    description:
      "Manage sales operations of orders, quotations and delivery tracking.",
    bg: "#dbeafe",
    banner:
      "https://img.freepik.com/free-photo/house-key-home-insurance-broker-agent-s-hand-protection_1150-14910.jpg?t=st=1717177390~exp=1717180990~hmac=15cdf96635326ca7fdb2bfffd2fcdce178b9236db1c8f5114b007d66dcbc4367&w=2000",
  },
  {
    developer: "Code with Mesfin",
    name: "BI",
    href: "/learn/bi",
    image: "https://frappecloud.com/files/Layer_1InsightsLogoNew.svg",
    title: "Business Intelligence",
    description:
      "Free and Open Source Data Analytics Tool for your Frappe Sites",
    bg: "#fce7f3",
    banner:
      "https://img.freepik.com/free-photo/business-scene-top-view-with-laptop_23-2147626519.jpg?t=st=1717176004~exp=1717179604~hmac=34e955c788df52409ea36ce27d4f6ea99e4f8be7dd5aebef04553c147f9d1eda&w=1800",
  },
  {
    developer: "Code with Mesfin",
    name: "CRM",
    image: "https://nestorbird.com/assets/images/Erpimg8.webp",
    title: "CRM",
    description:
      "Track everything from the pre-sales process to the entire customer lifecycle.",
    bg: "#fbcfe8",
    banner:
      "https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1399.jpg?t=st=1717182069~exp=1717185669~hmac=36c1e2c472b605fb2541c7db691dcae04186182792a40fac5bdbcf6c9d1627c2&w=1800",
  },
  {
    developer: "Frappe",
    name: "Collaboration",
    image: "https://frappecloud.com/files/ravicon.png",
    title: "Collaboration & Communication",
    description: "Simple, open source work messaging tool",
    bg: "#fee2e2",
    banner:
      "https://img.freepik.com/free-photo/hands-holding-puzzle-business-problem-solving-concept_53876-143285.jpg?t=st=1717182163~exp=1717185763~hmac=2adae7c9ab6c3355939956ff3be116f176c7dcb682a777248f2bc8bf0643fe35&w=1800",
  },
  {
    developer: "Frappe",
    name: "Education",
    image: "https://frappecloud.com/files/lms-logo.png",
    title: "Education",
    description: "Easy to Use, Open Source Learning Management System",
    bg: "#fef9c3",
    banner:
      "https://img.freepik.com/free-photo/kids-celebrating-kindergarten-graduation_23-2149371600.jpg?t=st=1717182294~exp=1717185894~hmac=d2ba4a82b7f038c80f41a3eed7005f505ab3cd60e0ff801407b5de75da8f9046&w=1800",
  },
  {
    developer: "ERPNext",
    name: "Manufacturing",
    image:
      "https://img.freepik.com/free-photo/precision-grinding-within-cylindrical-shape_60438-3767.jpg?size=626&ext=jpg&ga=GA1.1.617832925.1708503188&semt=sph",
    title: "Manufacturing",
    description:
      "Effectively maintain and manage multilevel bill of materials, production planning, job cards & inventory.",
    banner:
      "https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1717182343~exp=1717185943~hmac=e95bf22de8ecd3c17518582b6e60128197da04e900fd94941704c0b68d5ba24b&w=1800",
  },
  {
    developer: "ERPNext",
    name: "Quality",
    image:
      "https://img.freepik.com/free-vector/isometric-iso-certification-concept_23-2148688048.jpg?size=626&ext=jpg&uid=R19609540&ga=GA1.1.617832925.1708503188&semt=ais",
    title: "Quality Assurance",
    description:
      "Facilitate robust quality control procedures within the manufacturing process.",
      banner:"https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg?t=st=1717182424~exp=1717186024~hmac=d9201f7496c7763afb086dbba548dc2994aa60d21d0d8db12fb101d25366fdb7&w=1380"
  },
  {
    developer:"Frappe",
    name: "HRMS",
    image:
      "https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182288.jpg?t=st=1715623166~exp=1715626766~hmac=3e22920e8eb411d1aad8d209aa3999cef33361b904754e5396783fd7e372f6fa&w=1380",
    title: "HRMS",
    description:
      "Open Source, modern, and easy-to-use HR and Payroll Software for all organizations.",
      banner:"https://img.freepik.com/free-photo/medium-shot-woman-working-laptop_23-2149300643.jpg?t=st=1717182471~exp=1717186071~hmac=18ebb8234850f30636c891b5ecea3299c8c392b304540401d6a4f384749936f9&w=1800"
  },
  {developer:"ERPNext",
    name: "Healthcare",
    image:
      "https://img.freepik.com/free-vector/flat-design-medical-pharmacy-symbol_23-2149542018.jpg?t=st=1715623409~exp=1715627009~hmac=7c5973d3ec904f3e634166bc39163f105bf33200b72bfbbf8d1416a2abfc907c&w=1380",
    title: "Healthcare",
    description:
      "One stop solution for all your Healthcare Information System(HIS) & Electronics Medical Records(EMR) needs.",
      banner:"https://img.freepik.com/free-photo/clean-empty-hospital-ward-ready-receive-patients-reflecting-modern-medical-care_91128-4460.jpg?t=st=1717182526~exp=1717186126~hmac=0bd00ff18733c1b9a1dca1f0bab82191637658dceccb10001b476e0c54a0eebe&w=1800"
  },

  {
    developer:"ERPNext",
    name: "Project",
    href: "/learn/project",
    image: "https://nestorbird.com/assets/images/Erpimg4.webp",
    title: "Project Management",
    description:
      "Design, organize, schedule & analyze task to improve tracking accountability.",
      banner:"https://img.freepik.com/free-photo/business-people-meeting_53876-13581.jpg?t=st=1717182591~exp=1717186191~hmac=9fa4ee82693681f5ffa659091b8434d3596b2f968ab9acb2e6bc99c727e4d380&w=1380"
  },
  {developer:"ERPNext",
    name: "HelpDesk",
    image: "https://erpnext.com/files/Support.svg",
    title: "Help Desk",
    description:
      "Deliver a better service experience with an intuitive issue tracker and an integrated knowledge base.",
      banner:"https://img.freepik.com/free-photo/medium-shot-bored-people-working_23-2150697629.jpg?t=st=1717182617~exp=1717186217~hmac=d182ac3e67c80bb5230530e21baab1056e3849053d98fd893aa45e0d6fbbf9b7&w=1800"
  },
];

export { options, techStacks, cards, modules };
