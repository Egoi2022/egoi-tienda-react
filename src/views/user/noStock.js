import React from 'react'

import '../../styles/addCart.css';

function NoStock(
    {closeModalCart, detailsProducts, quantity}
) {
    const baseUrlImage = "https://egoi.xyz/storage/app/public/product/";
  return (
    <div className='containerProductAdd'>
      <h2>Tu producto no esta disponible</h2>
      <div className='detailsProductAdd'>
            <div className='imageProductAdd'>
                <img src={baseUrlImage + detailsProducts.images[0]} alt={detailsProducts.name} />
            </div>
            <div className='details'>
                <p className='title'>{detailsProducts.name}</p>
                <p className='canT'>
                  <svg width="18" height="17" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.89587 2.6001L3.9174 2.6001C4.14698 2.6001 4.33489 2.60009 4.48828 2.6109C4.64689 2.62208 4.7911 2.64588 4.92863 2.70492C5.2345 2.83625 5.47798 3.08049 5.60878 3.38675C5.66756 3.52438 5.69127 3.6687 5.70241 3.82759C5.71318 3.9813 5.71318 4.16963 5.71317 4.39988L5.71317 4.42131C5.71318 4.65155 5.71318 4.83988 5.70241 4.9936C5.69127 5.15248 5.66756 5.29681 5.60878 5.43443C5.47798 5.74069 5.2345 5.98494 4.92863 6.11626C4.7911 6.17531 4.64689 6.19911 4.48828 6.21028C4.33489 6.22109 4.14698 6.22109 3.91741 6.22109L3.89587 6.22109C3.66629 6.22109 3.47839 6.22109 3.32499 6.21028C3.16639 6.19911 3.02217 6.17531 2.88464 6.11626C2.57877 5.98493 2.33529 5.74069 2.20449 5.43443C2.14571 5.29681 2.122 5.15248 2.11087 4.9936C2.10009 4.83988 2.10009 4.65156 2.1001 4.42131L2.1001 4.39987C2.10009 4.16963 2.10009 3.9813 2.11087 3.82759C2.122 3.6687 2.14571 3.52438 2.20449 3.38675C2.33529 3.08049 2.57877 2.83625 2.88464 2.70492C3.02217 2.64588 3.16639 2.62208 3.32499 2.6109C3.47839 2.60009 3.66629 2.6001 3.89587 2.6001ZM3.36717 3.20942C3.24019 3.21836 3.1713 3.23481 3.12136 3.25626C2.95745 3.32663 2.82663 3.45767 2.75627 3.62242C2.73477 3.67276 2.71833 3.74208 2.7094 3.86954C2.70027 3.99979 2.7001 4.16702 2.7001 4.41059C2.7001 4.65416 2.70027 4.8214 2.7094 4.95164C2.71833 5.0791 2.73477 5.14843 2.75627 5.19877C2.82663 5.36352 2.95745 5.49456 3.12136 5.56493C3.1713 5.58637 3.24019 5.60282 3.36717 5.61177C3.49697 5.62091 3.66367 5.62109 3.90664 5.62109C4.1496 5.62109 4.3163 5.62091 4.44611 5.61177C4.57309 5.60282 4.64197 5.58637 4.69191 5.56493C4.85582 5.49456 4.98664 5.36352 5.057 5.19877C5.0785 5.14843 5.09494 5.0791 5.10387 4.95164C5.113 4.8214 5.11317 4.65416 5.11317 4.41059C5.11317 4.16702 5.113 3.99979 5.10387 3.86954C5.09494 3.74209 5.0785 3.67276 5.057 3.62242C4.98664 3.45767 4.85582 3.32663 4.69191 3.25626C4.64197 3.23481 4.57309 3.21836 4.44611 3.20942C4.3163 3.20027 4.1496 3.2001 3.90664 3.2001C3.66367 3.2001 3.49697 3.20027 3.36717 3.20942ZM8.16121 2.82203C8.3269 2.82203 8.46121 2.95634 8.46121 3.12203L8.46121 4.06258L9.37408 4.06258C9.53976 4.06258 9.67408 4.19689 9.67408 4.36258C9.67408 4.52826 9.53976 4.66258 9.37408 4.66258L8.46121 4.66258L8.46121 5.60313C8.46121 5.76881 8.3269 5.90313 8.16121 5.90313C7.99553 5.90313 7.86121 5.76881 7.86121 5.60313L7.86121 4.66258L6.94835 4.66258C6.78266 4.66258 6.64835 4.52826 6.64835 4.36258C6.64835 4.19689 6.78266 4.06258 6.94835 4.06258L7.86121 4.06258L7.86121 3.12203C7.86121 2.95634 7.99553 2.82203 8.16121 2.82203ZM3.89587 6.77911L3.91741 6.77911C4.14698 6.77911 4.33489 6.77911 4.48828 6.78991C4.64689 6.80109 4.7911 6.82489 4.92863 6.88394C5.2345 7.01526 5.47798 7.2595 5.60878 7.56576C5.66756 7.70339 5.69127 7.84772 5.7024 8.0066C5.71318 8.16031 5.71318 8.34864 5.71317 8.57889L5.71317 8.60032C5.71318 8.83056 5.71318 9.01889 5.7024 9.17261C5.69127 9.33149 5.66756 9.47582 5.60878 9.61345C5.47798 9.9197 5.2345 10.1639 4.92863 10.2953C4.7911 10.3543 4.64689 10.3781 4.48828 10.3893C4.33488 10.4001 4.14698 10.4001 3.9174 10.4001L3.89586 10.4001C3.66629 10.4001 3.47839 10.4001 3.32499 10.3893C3.16638 10.3781 3.02217 10.3543 2.88464 10.2953C2.57877 10.1639 2.33529 9.9197 2.20449 9.61345C2.14571 9.47582 2.122 9.33149 2.11087 9.17261C2.10009 9.0189 2.10009 8.83057 2.1001 8.60033L2.1001 8.57888C2.10009 8.34864 2.10009 8.16031 2.11087 8.0066C2.122 7.84772 2.14571 7.70339 2.20449 7.56576C2.33529 7.2595 2.57877 7.01526 2.88464 6.88394C3.02217 6.82489 3.16639 6.80109 3.32499 6.78991C3.47839 6.7791 3.66629 6.77911 3.89587 6.77911ZM3.36717 7.38843C3.24019 7.39738 3.1713 7.41382 3.12136 7.43527C2.95745 7.50564 2.82663 7.63668 2.75627 7.80143C2.73477 7.85177 2.71833 7.9211 2.7094 8.04855C2.70027 8.1788 2.7001 8.34603 2.7001 8.5896C2.7001 8.83317 2.70027 9.00041 2.7094 9.13065C2.71833 9.25811 2.73477 9.32744 2.75627 9.37778C2.82663 9.54253 2.95745 9.67357 3.12136 9.74394C3.1713 9.76538 3.24019 9.78183 3.36717 9.79078C3.49697 9.79992 3.66367 9.8001 3.90663 9.8001C4.1496 9.8001 4.3163 9.79992 4.4461 9.79078C4.57309 9.78183 4.64197 9.76538 4.69191 9.74394C4.85582 9.67357 4.98664 9.54253 5.057 9.37778C5.0785 9.32744 5.09494 9.25811 5.10387 9.13065C5.113 9.00041 5.11317 8.83317 5.11317 8.5896C5.11317 8.34604 5.113 8.1788 5.10387 8.04855C5.09494 7.9211 5.0785 7.85177 5.057 7.80143C4.98664 7.63668 4.85582 7.50564 4.69191 7.43527C4.64197 7.41382 4.57309 7.39738 4.44611 7.38843C4.3163 7.37928 4.1496 7.37911 3.90664 7.37911C3.66367 7.37911 3.49697 7.37928 3.36717 7.38843ZM8.08279 6.77911L8.10433 6.77911C8.3339 6.77911 8.52181 6.77911 8.6752 6.78991C8.83381 6.80109 8.97802 6.82489 9.11555 6.88394C9.42142 7.01526 9.6649 7.25951 9.79571 7.56576C9.85449 7.70339 9.87819 7.84772 9.88933 8.0066C9.9001 8.16031 9.9001 8.34864 9.9001 8.57887L9.9001 8.60033C9.9001 8.83057 9.9001 9.0189 9.88933 9.17261C9.87819 9.33149 9.85449 9.47582 9.79571 9.61345C9.6649 9.91971 9.42142 10.1639 9.11555 10.2953C8.97802 10.3543 8.83381 10.3781 8.6752 10.3893C8.52181 10.4001 8.3339 10.4001 8.10433 10.4001L8.08279 10.4001C7.85321 10.4001 7.66531 10.4001 7.51191 10.3893C7.35331 10.3781 7.20909 10.3543 7.07156 10.2953C6.76569 10.1639 6.52221 9.9197 6.39141 9.61345C6.33263 9.47582 6.30892 9.33149 6.29779 9.17261C6.28701 9.0189 6.28702 8.83057 6.28702 8.60033L6.28702 8.57887C6.28702 8.34863 6.28701 8.16031 6.29779 8.0066C6.30892 7.84772 6.33263 7.70339 6.39141 7.56576C6.52221 7.2595 6.76569 7.01526 7.07156 6.88394C7.20909 6.82489 7.35331 6.80109 7.51192 6.78991C7.66531 6.77911 7.85321 6.77911 8.08279 6.77911ZM7.55409 7.38843C7.42711 7.39738 7.35822 7.41382 7.30828 7.43527C7.14437 7.50564 7.01356 7.63668 6.94319 7.80143C6.92169 7.85177 6.90525 7.9211 6.89632 8.04855C6.88719 8.1788 6.88702 8.34604 6.88702 8.5896C6.88702 8.83317 6.88719 9.00041 6.89632 9.13066C6.90525 9.25811 6.92169 9.32744 6.94319 9.37778C7.01355 9.54253 7.14437 9.67357 7.30828 9.74394C7.35822 9.76538 7.42711 9.78183 7.55409 9.79078C7.68389 9.79992 7.85059 9.8001 8.09356 9.8001C8.33652 9.8001 8.50322 9.79993 8.63303 9.79078C8.76001 9.78183 8.82889 9.76538 8.87884 9.74394C9.04274 9.67357 9.17356 9.54253 9.24392 9.37778C9.26543 9.32744 9.28186 9.25811 9.2908 9.13066C9.29992 9.00041 9.3001 8.83317 9.3001 8.5896C9.3001 8.34604 9.29992 8.1788 9.2908 8.04855C9.28186 7.9211 9.26543 7.85177 9.24393 7.80143C9.17356 7.63668 9.04274 7.50564 8.87884 7.43527C8.82889 7.41382 8.76001 7.39738 8.63303 7.38843C8.50322 7.37928 8.33652 7.37911 8.09356 7.37911C7.85059 7.37911 7.68389 7.37928 7.55409 7.38843Z" fill="#74737B"/>
                  </svg>
                  Cantidad: {quantity}
                </p>
                <span className='envio'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5738 6.63403C13.1555 6.60036 12.6195 6.5999 11.8575 6.5999H5.53365C5.20228 6.5999 4.93365 6.33126 4.93366 5.99989C4.93367 5.66852 5.2023 5.3999 5.53367 5.3999L11.8831 5.3999C12.6136 5.3999 13.1979 5.39989 13.6701 5.4379C14.1544 5.4769 14.5729 5.5588 14.9581 5.7522C15.5758 6.0623 16.0796 6.55796 16.3959 7.16963C16.5937 7.5522 16.6774 7.96782 16.7171 8.44703C16.7394 8.71606 16.7488 9.02184 16.7528 9.37049H17.3906C18.2149 9.37049 18.8697 9.37048 19.3978 9.413C19.9382 9.4565 20.3981 9.54742 20.8192 9.75885C21.5001 10.1007 22.0553 10.647 22.4038 11.3209C22.6199 11.7388 22.7127 12.1953 22.757 12.7297C22.8002 13.2511 22.8002 13.8972 22.8002 14.7086V15.6375C22.8002 15.8056 22.8002 15.9662 22.789 16.1018C22.7767 16.2499 22.748 16.4204 22.66 16.5906C22.5368 16.8288 22.3412 17.0207 22.1027 17.1405C21.933 17.2257 21.7633 17.2535 21.6149 17.2654C21.4785 17.2764 21.3164 17.2764 21.1453 17.2764L21.0251 17.2764C20.7695 18.0488 20.034 18.5999 19.178 18.5999C18.322 18.5999 17.5865 18.0487 17.3309 17.2764H9.94356C9.68799 18.0488 8.95248 18.5999 8.09648 18.5999C7.22063 18.5999 6.47092 18.0229 6.2324 17.2223C5.98721 17.21 5.79037 17.2042 5.53366 17.2042C5.20229 17.2042 4.93366 16.9356 4.93366 16.6042C4.93366 16.2729 5.20229 16.0042 5.53366 16.0042C5.80655 16.0042 6.02013 16.0104 6.26817 16.0226C6.53951 15.2784 7.26044 14.7528 8.09648 14.7528C8.95248 14.7528 9.68799 15.304 9.94356 16.0764H15.5557V10.2352C15.5557 9.4839 15.5553 8.95705 15.5212 8.54619C15.4877 8.1426 15.425 7.90448 15.33 7.72082C15.1312 7.33633 14.813 7.0221 14.4197 6.82463C14.2303 6.72952 13.9853 6.66716 13.5738 6.63403ZM16.7557 10.5705V16.0764H17.3309C17.5865 15.304 18.322 14.7528 19.178 14.7528C20.034 14.7528 20.7695 15.304 21.0251 16.0764H21.1256C21.3235 16.0764 21.4363 16.0759 21.5186 16.0693C21.547 16.067 21.5642 16.0644 21.5732 16.0628C21.5789 16.0588 21.5838 16.0542 21.5876 16.0493C21.5891 16.0404 21.5912 16.0255 21.5931 16.0026C21.5997 15.9228 21.6002 15.8129 21.6002 15.6175V14.7352C21.6002 13.8912 21.5997 13.2949 21.5611 12.8289C21.523 12.3701 21.4511 12.0911 21.3378 11.8721C21.1068 11.4253 20.7373 11.0605 20.2808 10.8313C20.0555 10.7181 19.769 10.6468 19.3015 10.6091C18.8272 10.5709 18.2207 10.5705 17.3646 10.5705H16.7557ZM2.71131 9.7499C2.71131 9.41853 2.97994 9.1499 3.31131 9.1499H7.08909C7.42046 9.1499 7.68909 9.41853 7.68909 9.7499C7.68909 10.0813 7.42046 10.3499 7.08909 10.3499H3.31131C2.97994 10.3499 2.71131 10.0813 2.71131 9.7499ZM1.2002 12.7499C1.2002 12.4185 1.46882 12.1499 1.8002 12.1499H7.84465C8.17602 12.1499 8.44465 12.4185 8.44465 12.7499C8.44465 13.0813 8.17602 13.3499 7.84465 13.3499H1.8002C1.46882 13.3499 1.2002 13.0813 1.2002 12.7499ZM8.09648 15.9528C7.68264 15.9528 7.36075 16.2775 7.3534 16.6624L7.35327 16.6764C7.35327 17.0676 7.67764 17.3999 8.09648 17.3999C8.51533 17.3999 8.83969 17.0676 8.83969 16.6764C8.83969 16.2851 8.51533 15.9528 8.09648 15.9528ZM19.178 15.9528C18.7591 15.9528 18.4348 16.2851 18.4348 16.6764C18.4348 17.0676 18.7591 17.3999 19.178 17.3999C19.5968 17.3999 19.9212 17.0676 19.9212 16.6764C19.9212 16.2851 19.5968 15.9528 19.178 15.9528Z" fill="#089705"/>
                    </svg>
                    Envio Gratis
                </span>
            
            </div>        
      </div>
      <div className='totalPrice'>
        <h5 className='precioTotal'>Precio Total</h5>
        <h4>${detailsProducts.unit_price.toLocaleString()}</h4>
      </div>
      {}
      <div className='btnsRedirect noStock'>
        <a href='/detailCart' className='disabled-link'>Agotado</a>
      </div>
      <div className='btnsRedirect buyNow'>
        <a href='/'>Seguir comprando</a>
      </div>
    </div>
  )
}

export default NoStock
