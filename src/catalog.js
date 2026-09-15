'use strict';
const products = [
  ['zaminocal', 'Zaminocal', 90000], ['cerebrain', 'Cerebrain', 120000],
  ['vitamin-c', 'Vitamin C', 90000], ['yunzhi', 'Yunzhi', 130000], ['anatic-soap', 'Anatic Soap', 15000]
].map(([id, name, price]) => ({ id, name, price, description: 'Product information and safety details await verification from the supplied product material.', image: null, approvedForRecommendation: false }));
const packages = [
  { id: 'package-1', name: 'Package 1', price: 250000, items: ['Vitamin C', 'Zaminocal'], description: 'Package contents as set by NeuroTotoInsight.', image: null, approvedForRecommendation: false },
  { id: 'package-2', name: 'Package 2', price: 350000, items: ['Vitamin C', 'Zaminocal', 'Cerebrain'], description: 'Package contents as set by NeuroTotoInsight.', image: null, approvedForRecommendation: false },
  { id: 'package-3', name: 'Package 3', price: 450000, items: ['Vitamin C', 'Zaminocal', 'Cerebrain', 'Yunzhi'], description: 'Package contents as set by NeuroTotoInsight.', image: null, approvedForRecommendation: false }
];
const regions = ['Arusha','Dar es Salaam','Dodoma','Geita','Iringa','Kagera','Katavi','Kigoma','Kilimanjaro','Lindi','Manyara','Mara','Mbeya','Morogoro','Mtwara','Mwanza','Njombe','Pwani','Rukwa','Ruvuma','Shinyanga','Simiyu','Singida','Songwe','Tabora','Tanga','Kaskazini Unguja','Kusini Unguja','Mjini Magharibi','Kaskazini Pemba','Kusini Pemba'];
const busCompanies = ['Abood','Shabiby','New Force','BM Coach','Happy Nation','Nyehunge',"Ally's Star",'Satco','Hai Travelers','Super Feo','Mapenzi ya Mungu','Adventure','Asante Rabi','Tahmeed Coach','Kisumapai Express','Esther Luxury Coach','Kilimanjaro Express','Takbir','Tashriff','Dar Express','Dar Lux','Hood Bus','Akamba','Raha Leo','Tip Top','Yarabi Salama'];
module.exports = { products, packages, regions, busCompanies };
