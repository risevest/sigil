import { memo } from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'
import type { IconProps } from '../../types'
const Vanuatu = /* @__PURE__ */ memo(function Vanuatu(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 40 40" width={size} height={size} {...props}>
      <G clipPath="url(#a)">
        <Path
          fill="#000"
          d="M40 20q-.001-1.327-.17-2.609H17.392L5.858 5.858c-7.81 7.81-7.81 20.474 0 28.284L17.39 22.61h22.44c.11-.854.169-1.725.169-2.609"
        />
        <Path
          fill="#F0F0F0"
          d="m39.975 21.002-.006.114zM39.948 21.437l-.013.169zM39.88 17.82l.022.2zM39.969 18.884l.006.114zM39.99 19.43l.003.115q0-.058-.003-.116M39.936 18.394l.012.168z"
        />
        <Path
          fill="#D80027"
          d="M39.83 17.391q.014.104.026.206C38.669 7.685 30.232 0 20 0A19.94 19.94 0 0 0 5.857 5.858l11.534 11.533z"
        />
        <Path
          fill="#6DA544"
          d="M39.83 22.609H17.39L5.858 34.142A19.94 19.94 0 0 0 20 40c10.232 0 18.669-7.685 19.856-17.597z"
        />
        <Path fill="#F0F0F0" d="m39.902 21.979-.021.2q.011-.1.021-.2" />
        <Path fill="#000" d="M39.991 20.57" />
        <Path
          fill="#FFDA44"
          d="M39.981 19.123H16.657L4.676 7.143c-.387.41-.807.98-1.067 1.386l11.458 11.463L3.6 31.46c.227.404.721 1.002 1.069 1.39l11.988-11.988h23.327a20 20 0 0 0-.003-1.739"
        />
        <Path
          fill="#FFDA44"
          d="M4.859 24.263v-1.675a3.035 3.035 0 0 0 3.032-3.032 2.147 2.147 0 0 0-2.145-2.145c-.806 0-1.462.656-1.462 1.462 0 .515.42.934.935.934a.53.53 0 0 0 .528-.528h1.675a2.206 2.206 0 0 1-2.203 2.203 2.61 2.61 0 0 1-2.61-2.609 3.14 3.14 0 0 1 3.137-3.136 3.824 3.824 0 0 1 3.82 3.82 4.71 4.71 0 0 1-4.707 4.706"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h40v40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
})
/**
 * Flags by `Deji.Zeal`: Vanuatu
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export { Vanuatu }
