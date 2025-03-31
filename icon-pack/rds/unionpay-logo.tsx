import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 32 21" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M6.26727 0.545654H14.2524C15.3722 0.545654 16.0627 1.4565 15.8025 2.57369L12.0824 18.5202C11.8214 19.6338 10.7042 20.542 9.59059 20.542H1.60368C0.486496 20.542 -0.204798 19.6338 0.054437 18.5202L3.77279 2.57369C4.03379 1.4565 5.15009 0.545654 6.26727 0.545654Z"
        fill="#ED171F"
      />
      <Path
        d="M13.5911 0.545654H22.7737C23.8891 0.545654 23.3865 1.4565 23.1237 2.57369L19.4045 18.5202C19.1453 19.6338 19.2264 20.542 18.1092 20.542H8.92751C7.80769 20.542 7.11639 19.6338 7.37827 18.5202L11.0949 2.57369C11.3585 1.4565 12.4722 0.545654 13.5911 0.545654Z"
        fill="#082F67"
      />
      <Path
        d="M22.4104 0.545654H30.3947C31.5118 0.545654 32.2067 1.4565 31.9448 2.57369L28.2247 18.5202C27.9637 19.6338 26.8456 20.542 25.7293 20.542H17.7459C16.6296 20.542 15.9366 19.6338 16.1976 18.5202L19.9177 2.57369C20.1778 1.4565 21.2941 0.545654 22.4104 0.545654Z"
        fill="#006A65"
      />
      <Path
        d="M7.74949 6.73115C6.89066 6.73997 6.64025 6.73115 6.55824 6.71263C6.52474 6.85812 5.94543 9.52807 5.94543 9.52807C5.82022 10.0695 5.72763 10.4557 5.42166 10.6999C5.24531 10.8463 5.04163 10.9186 4.80444 10.9186C4.42528 10.9186 4.20396 10.729 4.16429 10.3684L4.16076 10.2485C4.16076 10.2485 4.2745 9.52454 4.27715 9.52013C4.27715 9.52013 4.88203 7.08826 4.99137 6.7673C4.99401 6.7479 4.99754 6.74173 5.00195 6.73291C3.81688 6.74349 3.60614 6.73291 3.59291 6.7144C3.58762 6.7382 3.55323 6.88987 3.55323 6.88987L2.93424 9.62771L2.87957 9.86314L2.77817 10.6223C2.77817 10.8472 2.82226 11.0297 2.91043 11.1875C3.197 11.684 4.00204 11.7545 4.45879 11.7545C5.04604 11.7545 5.59361 11.6311 5.96659 11.4018C6.61379 11.0209 6.78485 10.4248 6.93299 9.89488L7.00529 9.62154C7.00529 9.62154 7.63222 7.0962 7.74067 6.7673C7.74067 6.7479 7.7442 6.74173 7.74949 6.73291M9.88069 8.76888C9.72991 8.76888 9.45392 8.80591 9.20615 8.9276C9.11444 8.97521 9.02803 9.02547 8.93986 9.08014L9.01922 8.78563L8.97601 8.73626C8.45137 8.84207 8.33233 8.8597 7.84913 8.92672L7.81033 8.95405C7.74949 9.41962 7.70452 9.77055 7.49202 10.6902C7.41178 11.0235 7.32801 11.3648 7.24601 11.7042L7.26717 11.7466C7.77065 11.7228 7.91791 11.7228 8.34908 11.7272L8.38612 11.6901C8.43814 11.4088 8.44696 11.3445 8.5704 10.774C8.62507 10.5024 8.74323 9.90987 8.8023 9.69737C8.91252 9.64887 9.01569 9.60302 9.11974 9.60302C9.36222 9.60302 9.33136 9.81111 9.3243 9.89752C9.31548 10.0377 9.22378 10.4989 9.13296 10.8957L9.07477 11.1479C9.03244 11.3392 8.98571 11.5226 8.94338 11.7122L8.96278 11.7466C9.45216 11.7228 9.59853 11.7228 10.0191 11.7272L10.0676 11.6901C10.1434 11.2519 10.1673 11.1337 10.3013 10.4954L10.3692 10.2017C10.5006 9.62595 10.5658 9.33585 10.4662 9.09866C10.3612 8.83237 10.1091 8.768 9.87981 8.768M12.2561 9.36935C11.9969 9.41961 11.8311 9.44959 11.668 9.47693C11.504 9.50162 11.3444 9.52454 11.0905 9.55893L11.0711 9.57745L11.0543 9.59156C11.0278 9.78025 11.0102 9.94073 10.9749 10.1321C10.9406 10.3287 10.8973 10.5535 10.8242 10.8736C10.7668 11.1196 10.7378 11.2052 10.7051 11.2916C10.6743 11.3789 10.639 11.4644 10.5764 11.7042L10.6046 11.7466C10.8392 11.7351 10.9908 11.7272 11.1495 11.7254C11.3082 11.7228 11.4714 11.7254 11.7244 11.7272L11.7474 11.7122L11.7703 11.6892C11.8082 11.4706 11.8117 11.4133 11.8347 11.3048C11.8567 11.1911 11.8946 11.0341 11.989 10.6135C12.0322 10.4116 12.0842 10.2167 12.13 10.0148C12.1794 9.81023 12.227 9.61272 12.2738 9.41344L12.2658 9.39316L12.2552 9.36847L12.2561 9.36935ZM14.3794 8.78563C14.1387 8.78563 13.5655 8.81032 13.1158 9.22563C12.7975 9.51925 12.6485 9.92486 12.5559 10.3102C12.4669 10.707 12.3602 11.4168 13.0144 11.6831C13.219 11.7677 13.5082 11.7915 13.6943 11.7915C14.1757 11.7915 14.6668 11.6593 15.0337 11.2678C15.3211 10.9512 15.4498 10.4821 15.493 10.2846C15.6421 9.63829 15.5301 9.33938 15.3855 9.15509C15.1633 8.87734 14.7806 8.78563 14.3794 8.78563ZM14.3953 10.2396C14.3759 10.3446 14.2806 10.7502 14.151 10.9221C14.0628 11.05 13.9553 11.1267 13.8353 11.1267C13.8027 11.1267 13.5955 11.1267 13.592 10.8198C13.5876 10.6682 13.6193 10.5112 13.6608 10.341C13.7675 9.85256 13.9024 9.44254 14.2348 9.44254C14.4949 9.44254 14.5117 9.75027 14.3961 10.2396M25.8051 11.7351C25.8783 11.3022 25.9497 10.8807 26.1411 10.0474C26.231 9.65063 26.328 9.25296 26.425 8.8597L26.4074 8.81561C25.8836 8.91084 25.7452 8.93201 25.2435 9.00607L25.2029 9.03517C25.1976 9.07485 25.1923 9.11365 25.1879 9.15156C25.1094 9.02459 24.9939 8.91613 24.8176 8.84824C24.5971 8.76359 24.069 8.8791 23.6193 9.28912C23.3045 9.58098 23.1502 9.98394 23.0611 10.3684C22.9712 10.7572 22.8636 11.4679 23.5188 11.7228C23.7251 11.8092 23.9129 11.8347 24.0981 11.8277C24.2965 11.8171 24.4816 11.7175 24.6527 11.5737C24.6368 11.6328 24.6218 11.691 24.606 11.7501L24.6368 11.7862C25.1068 11.7677 25.2505 11.7677 25.7584 11.7686L25.8051 11.7351ZM25.0354 10.0413C25.0177 10.1224 24.9983 10.2079 24.9763 10.3049C24.9437 10.4469 24.9066 10.5879 24.8714 10.729C24.8361 10.8251 24.7947 10.9151 24.7488 10.975C24.6597 11.0967 24.4578 11.1717 24.3388 11.1717C24.3062 11.1717 24.1025 11.1717 24.0945 10.8683C24.0928 10.7211 24.1245 10.565 24.1607 10.3931C24.2727 9.91692 24.4023 9.50779 24.7365 9.50779C24.9481 9.50779 25.0583 9.70442 25.0345 10.0413M18.2229 8.768C18.0722 8.768 17.7953 8.80503 17.5484 8.92672C17.4602 8.97433 17.3703 9.02459 17.2839 9.07926L17.3632 8.78475L17.32 8.73537C16.7936 8.84118 16.679 8.85882 16.1923 8.92583L16.1544 8.95317C16.0953 9.41873 16.0468 9.76967 15.8369 10.6893C15.7576 11.0226 15.6773 11.3639 15.5918 11.7034L15.6165 11.7457C16.112 11.7219 16.2628 11.7219 16.6922 11.7263L16.7319 11.6892C16.7839 11.408 16.7927 11.3436 16.9109 10.7731C16.9691 10.5015 17.0908 9.90899 17.1499 9.69649C17.2565 9.64799 17.3624 9.60214 17.4691 9.60214C17.7054 9.60214 17.6789 9.81023 17.6701 9.89664C17.6586 10.0368 17.5722 10.498 17.4796 10.8948L17.4214 11.147C17.3756 11.3383 17.3289 11.5217 17.2874 11.7113L17.305 11.7457C17.7988 11.7219 17.9452 11.7219 18.3631 11.7263L18.4152 11.6892C18.4892 11.251 18.5086 11.1329 18.6462 10.4945L18.7097 10.2008C18.8455 9.62506 18.9107 9.33497 18.812 9.09777C18.7035 8.83149 18.4496 8.76712 18.2229 8.76712M23.7365 8.18163C23.7709 8.04761 23.7939 7.88625 23.7939 7.72753C23.7939 7.51415 23.7533 7.31223 23.6316 7.14822C23.3204 6.71704 22.7111 6.71175 21.9986 6.70822L21.6512 6.71175C20.743 6.72233 20.3824 6.71704 20.2298 6.69764C20.2175 6.76466 20.1901 6.88369 20.1901 6.88369L19.8674 8.39149C19.8674 8.39149 19.0915 11.5914 19.0544 11.7413C19.8445 11.7325 20.1716 11.7325 20.3039 11.7466C20.3383 11.5958 20.5217 10.6999 20.5217 10.6999C20.5217 10.6999 20.6777 10.0465 20.6866 10.0227C20.6866 10.0227 20.7395 9.95572 20.7889 9.92662H20.8612C21.5427 9.92662 22.3152 9.92662 22.9218 9.48575C23.3301 9.17978 23.6105 8.7292 23.7357 8.18252M22.4527 8.27598C22.3778 8.60928 22.1626 8.89233 21.8849 9.02547C21.6512 9.14186 21.3717 9.15156 21.0816 9.15156H20.8929L20.907 9.07838C20.907 9.07838 21.2544 7.57499 21.2527 7.57763L21.2632 7.50268L21.2703 7.44273L21.4078 7.45595C21.4078 7.45595 22.1168 7.51591 22.1353 7.51591C22.4157 7.62613 22.5321 7.90917 22.4518 8.27598M29.9035 8.81032L29.8638 8.76447C29.3445 8.87028 29.2501 8.88704 28.774 8.94876L28.7396 8.98227C28.7378 8.98756 28.7378 8.99637 28.7343 9.00431L28.7326 8.99549C28.3763 9.81552 28.3896 9.63653 28.1003 10.2802C28.0951 10.252 28.095 10.2317 28.095 10.2026L28.0236 8.80944L27.9787 8.76359C27.4364 8.8694 27.4214 8.88615 26.9214 8.94788L26.8791 8.98138C26.8791 8.9999 26.8756 9.0193 26.8738 9.03605L26.8782 9.04487C26.9373 9.36406 26.9258 9.29264 26.9858 9.79789C27.0167 10.0448 27.0563 10.2961 27.0854 10.5386C27.1339 10.9495 27.1622 11.1505 27.223 11.7765C26.8835 12.3312 26.8033 12.5445 26.4814 13.0339V13.0374L26.2513 13.4016C26.2231 13.4395 26.2002 13.4642 26.1658 13.4739C26.1296 13.4924 26.0811 13.4995 26.0168 13.4995H25.888L25.6993 14.1255L26.3492 14.1352C26.731 14.1335 26.9699 13.9562 27.0987 13.7173L27.506 13.0198H27.5007L27.5422 12.9704C27.8155 12.3805 29.9026 8.80768 29.9026 8.80768M12.2605 8.55814C12.0225 8.41618 11.6133 8.46027 11.3329 8.65425C11.0525 8.84471 11.0181 9.10924 11.2545 9.25032C11.489 9.38964 11.9061 9.34907 12.1838 9.15421C12.4598 8.95934 12.4977 8.69217 12.2614 8.55726"
        fill="white"
      />
    </Svg>
  )
}

Icon.displayName = 'UnionpayLogo'

export const UnionpayLogo = memo(Icon)
