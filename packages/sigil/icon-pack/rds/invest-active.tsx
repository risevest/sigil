import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const InvestActive = /* @__PURE__ */ memo(function InvestActive(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 28 28" width={size} height={size} {...props}>
      <Path d="M22.66 4.96c-.3-.59-.9-.96-1.57-.96H6.37c-.67 0-1.27.37-1.59 1.03L3 9.55v13.91h21.46V9.55zm-6.79 13.61c0 .33-.27.6-.6.6h-.72v.97h-1.5v-.97H11.6v-1.2h3.07v-.95h-2.49c-.33 0-.6-.27-.6-.6v-2.11c0-.33.27-.6.6-.6h.87v-.97h1.5v.97h1.28v1.21h-3.05v.89h2.49c.33 0 .6.27.6.61zm4.61-8.12H6.98v-1.5h13.5z" />
    </Svg>
  )
})
export { InvestActive }
