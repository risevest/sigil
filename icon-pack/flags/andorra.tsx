import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_2192)">
        <Path
          d="M11.3046 38.0155C13.9339 39.2869 16.8837 40 20.0002 40C23.1167 40 26.0664 39.2869 28.6958 38.0155L30.435 20L28.6958 1.98453C26.0664 0.713125 23.1167 0 20.0002 0C16.8837 0 13.9339 0.713125 11.3046 1.98453L9.56543 20L11.3046 38.0155Z"
          fill="#FFDA44"
        />
        <Path
          d="M28.6953 38.0148C35.3852 34.7799 39.9997 27.9291 39.9997 20C39.9997 12.0709 35.3852 5.22007 28.6953 1.98523V38.0148Z"
          fill="#D80027"
        />
        <Path
          d="M11.3044 38.0148V1.98523C4.61445 5.22007 0 12.0708 0 20C0 27.9292 4.61445 34.7799 11.3044 38.0148Z"
          fill="#0052B4"
        />
        <Path
          d="M20 26.9565C20 23.765 20 20 20 20H25.2174V22.6087C25.2174 23.0619 24.3479 24.7225 22.2016 26.087C21.3887 26.6038 20.5472 26.7701 20 26.9565Z"
          fill="#D80027"
        />
        <Path d="M14.7822 14.7826H19.9996V20H14.7822V14.7826Z" fill="#D80027" />
        <Path
          d="M22.6081 13.0436C22.6081 12.083 21.8295 11.3044 20.869 11.3044C20.5518 11.3044 20.2554 11.3907 19.9995 11.539C19.7434 11.3907 19.4471 11.3044 19.1299 11.3044C18.1695 11.3044 17.3908 12.083 17.3908 13.0436H13.043V21.7391C13.043 24.9763 15.6137 26.8484 17.6298 27.8189C17.4789 28.0766 17.3908 28.3755 17.3908 28.6958C17.3908 29.6563 18.1695 30.4349 19.1299 30.4349C19.4471 30.4349 19.7435 30.3487 19.9995 30.2004C20.2555 30.3487 20.5518 30.4349 20.869 30.4349C21.8295 30.4349 22.6081 29.6563 22.6081 28.6958C22.6081 28.3755 22.52 28.0766 22.3691 27.8189C24.3851 26.8484 26.9559 24.9764 26.9559 21.7391V13.0436H22.6081ZM24.3473 21.7391C24.3473 22.1923 24.3473 23.5713 22.201 24.9359C21.388 25.4527 20.5466 25.7879 19.9995 25.9742C19.4523 25.7879 18.6109 25.4527 17.7979 24.9359C15.6516 23.5713 15.6516 22.1923 15.6516 21.7391V15.6523H24.3473V21.7391Z"
          fill="#FF9811"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_2192">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Andorra'

/**
 * Flags by `Deji.Zeal`: Andorra
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Andorra = memo(Icon)
