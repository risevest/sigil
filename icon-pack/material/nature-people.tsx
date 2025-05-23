import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.41498 10.915C5.24341 10.915 5.91498 10.2434 5.91498 9.41496C5.91498 8.58653 5.24341 7.91496 4.41498 7.91496C3.58655 7.91496 2.91498 8.58653 2.91498 9.41496C2.91498 10.2434 3.58655 10.915 4.41498 10.915Z" />
      <Path d="M22.085 9.08496C22.085 5.21496 18.955 2.08496 15.085 2.08496C11.215 2.08496 8.08498 5.21496 8.08498 9.08496C8.08498 12.555 10.605 15.425 13.915 15.975V19.915H5.91498V16.915H6.91498V12.915C6.91498 12.365 6.46498 11.915 5.91498 11.915H2.91498C2.36498 11.915 1.91498 12.365 1.91498 12.915V16.915H2.91498V21.915H18.915V19.915H15.915V16.035C19.385 15.625 22.085 12.675 22.085 9.08496ZM15.085 14.085C12.325 14.085 10.085 11.845 10.085 9.08496C10.085 6.32496 12.325 4.08496 15.085 4.08496C17.845 4.08496 20.085 6.32496 20.085 9.08496C20.085 11.845 17.845 14.085 15.085 14.085Z" />
    </Svg>
  )
}

Icon.displayName = 'NaturePeople'

/**
 * Material Icon: Nature People
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:nature_people Material Icon Docs}
 */
export const NaturePeople = memo(Icon)
