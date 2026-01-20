import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const AmexLogo = /* @__PURE__ */ memo(function AmexLogo(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill="none" viewBox="0 0 32 24" width={size} height={size} {...props}>
      <Path
        fill="#006FCF"
        fillRule="evenodd"
        d="M28 2.318h-3.654l-1.91 5.435-1.993-5.435h-3.737v8.463l-3.82-8.463H9.813l-3.82 8.647H8.65l.748-1.73h3.986l.748 1.73h4.982V4.953l2.242 6.012h2.076l2.243-6.012v6.012H28v1.318h-3.073L22.436 15l-2.574-2.717H9.315v8.647h10.464l2.574-2.8 2.574 2.8H28V22h-3.654l-1.993-2.141L20.36 22H7.986v-9.882H4L8.983 1h4.816l1.744 3.788V1h5.98l.996 2.882L23.516 1H28zm0 11.859-2.242 2.388L28 18.953v1.977l-4.07-4.365L28 12.282zM16.706 20.93v-2.06h-4.983v-1.317h4.9v-1.976h-4.9v-1.318h4.983v-1.976l4.152 4.282zM10.146 7.34l1.162-2.8 1.163 2.8z"
        clipRule="evenodd"
      />
    </Svg>
  )
})
export { AmexLogo }
