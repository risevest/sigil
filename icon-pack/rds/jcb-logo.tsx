import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, LinearGradient, Path, Defs, Stop } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 32 26" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M32 20.5774C32 23.3158 29.7702 25.5456 27.0318 25.5456H0V5.86836C0 3.12997 2.22983 0.900146 4.96821 0.900146H32V20.5774Z"
        fill="white"
      />
      <Path
        d="M23.198 15.531H25.2518C25.3105 15.531 25.4474 15.5114 25.5061 15.5114C25.8973 15.4332 26.2298 15.0811 26.2298 14.5921C26.2298 14.1226 25.8973 13.7706 25.5061 13.6728C25.4474 13.6532 25.3301 13.6532 25.2518 13.6532H23.198V15.531Z"
        fill="url(#paint0_linear_134_2160)"
      />
      <Path
        d="M25.0171 2.56274C23.0611 2.56274 21.4572 4.14709 21.4572 6.12264V9.81946H26.4841C26.6015 9.81946 26.7384 9.81946 26.8362 9.83902C27.9707 9.8977 28.8117 10.4845 28.8117 11.5016C28.8117 12.3036 28.2445 12.9882 27.1883 13.1251V13.1642C28.3423 13.2424 29.2225 13.8879 29.2225 14.8855C29.2225 15.9613 28.2445 16.6654 26.9535 16.6654H21.4377V23.9026H26.6601C28.6161 23.9026 30.2201 22.3182 30.2201 20.3427V2.56274H25.0171Z"
        fill="url(#paint1_linear_134_2160)"
      />
      <Path
        d="M25.9755 11.7363C25.9755 11.2669 25.643 10.9539 25.2518 10.8953C25.2127 10.8953 25.1149 10.8757 25.0562 10.8757H23.198V12.597H25.0562C25.1149 12.597 25.2323 12.597 25.2518 12.5774C25.643 12.5187 25.9755 12.2058 25.9755 11.7363Z"
        fill="url(#paint2_linear_134_2160)"
      />
      <Path
        d="M5.33985 2.56274C3.38386 2.56274 1.77995 4.14709 1.77995 6.12264V14.905C2.77751 15.394 3.81418 15.707 4.85086 15.707C6.08313 15.707 6.74817 14.9637 6.74817 13.9466V9.7999H9.79951V13.927C9.79951 15.531 8.80196 16.8415 5.41809 16.8415C3.3643 16.8415 1.76039 16.3916 1.76039 16.3916V23.883H6.98288C8.93887 23.883 10.5428 22.2987 10.5428 20.3231V2.56274H5.33985Z"
        fill="url(#paint3_linear_134_2160)"
      />
      <Path
        d="M15.1785 2.56274C13.2225 2.56274 11.6186 4.14709 11.6186 6.12264V10.7779C12.5183 10.0151 14.0831 9.52606 16.6064 9.64342C17.956 9.7021 19.4034 10.0737 19.4034 10.0737V11.5799C18.6797 11.2082 17.8191 10.8757 16.7042 10.7975C14.7873 10.6605 13.6332 11.5994 13.6332 13.2424C13.6332 14.905 14.7873 15.8439 16.7042 15.6874C17.8191 15.6092 18.6797 15.2571 19.4034 14.905V16.4111C19.4034 16.4111 17.9756 16.7828 16.6064 16.8415C14.0831 16.9588 12.5183 16.4698 11.6186 15.707V23.9222H16.8411C18.7971 23.9222 20.401 22.3378 20.401 20.3623V2.56274H15.1785Z"
        fill="url(#paint4_linear_134_2160)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_134_2160"
          x1="-18.4087"
          y1="13.2535"
          x2="74.3652"
          y2="13.2535"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#007940" />
          <Stop offset="0.2285" stopColor="#00873F" />
          <Stop offset="0.7433" stopColor="#40A737" />
          <Stop offset="1" stopColor="#5CB531" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_134_2160"
          x1="0.0584053"
          y1="13.213"
          x2="32.0875"
          y2="13.213"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#007940" />
          <Stop offset="0.2285" stopColor="#00873F" />
          <Stop offset="0.7433" stopColor="#40A737" />
          <Stop offset="1" stopColor="#5CB531" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_134_2160"
          x1="-20.0965"
          y1="13.1878"
          x2="81.1748"
          y2="13.1878"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#007940" />
          <Stop offset="0.2285" stopColor="#00873F" />
          <Stop offset="0.7433" stopColor="#40A737" />
          <Stop offset="1" stopColor="#5CB531" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_134_2160"
          x1="0.0561782"
          y1="13.2243"
          x2="32.5786"
          y2="13.2243"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#1F286F" />
          <Stop offset="0.4751" stopColor="#004E94" />
          <Stop offset="0.8261" stopColor="#0066B1" />
          <Stop offset="1" stopColor="#006FBC" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_134_2160"
          x1="11.568"
          y1="13.2241"
          x2="20.237"
          y2="13.2241"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#6C2C2F" />
          <Stop offset="0.1735" stopColor="#882730" />
          <Stop offset="0.5731" stopColor="#BE1833" />
          <Stop offset="0.8585" stopColor="#DC0436" />
          <Stop offset="1" stopColor="#E60039" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'JcbLogo'

export const JcbLogo = memo(Icon)
