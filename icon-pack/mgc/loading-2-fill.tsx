import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Use, Defs, Pattern, Image } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <Defs>
        <Pattern id="b" width="100%" height="100%" patternUnits="objectBoundingBox">
          <Use xlinkHref="#a" />
        </Pattern>
        <Image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAFqADAAQAAAABAAAAFgAAAAAcITNaAAAC/UlEQVQ4EZ2UTW7UQBCFX3W37XFIskBik0goQtmx5AJs4QhchQNwI7hMttkiJRLMTOzu4queSVhnnOnY/ffV61dl23z71XXCtb37maSPg64+FJ2tRbtWNHnRallrykyefCXdvEt6+p31lDpMtaSAalrSSWCXf5c+Ab1IupyB/cnaoHRB8bgniIhwwrW7+/VDNxdZOyzYA5vyEQq8znkqlssJXLZ8ztqOWeccO6voaRw0hL/K06Ds1U8E385ZbSmyZdDuAJ2yF1crvpK3Mr4+eb0aHrYAZ1oeVeowpTT6kkalNnimVS8nWEGJTdMoXzdKmkbDBFuLJ6yoCM20VNPrwW/fb+Q6m6Z19lC6+iCRNMNvpeR1xYpsr6qKbsOsS9J22Wo596o37nl2TzNv2RSNAKOqD69TfP3lehjbVQuAozLxHpib6PRm3BTNrTipjCdajHHvj/wz3gNvjFWW7hm+Hzf6Jk/3zOyjqFRbM6On5Or3tWNiL4r9qUM6kTCyZh3IRuqJkR1Tj+y8J8C1wzHZY5PvLKWFflVrdBMiIkhfANhs6aAYUFcfwOruC8A9sC0TD8jfAZzoXxKZgrCBk++rpwXBlaHYF/BGIC+cfumdUMlkV0AwbFqY27vZXyzZswZlKri5SdRXwFmDyZ4JtkKtYVuoN0t86gCwogGoAeY5jArowlZswE8sgdNQxrBRXhoprww08Ur60EqBUO4ngFTaEuEhjQOE5YA9zwPuZ8JUErXvNHeTppMx+whbXMdjIU/rAvJRM/C8VAntVyP0D5AFp4bKF+Zc2xcthiDpgPD7bwOuBmwIMatUZgXO6Kjxu7PwSP+8oBA3aAEh3zG7u4QIJGNaaQH9Yn99ISchiMyeMPxUfTX6COwlAZieg1/qyWXt/l8bZiCeri+0A0Cs0bo71YAbGy4jkvQFcaKrvi8A5o+E4ZGYeLFL1cqD5AERufhAhA8vCe8cxCvhvK/ThHj/9XBlk9qO3h44xx0sPlkZ4jHLEB6bM9i/EUcV3/ACt8zsQDvYSzAAAAAElFTkSuQmCC"
          id="a"
          width="22"
          height="22"
        />
      </Defs>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13.5 21a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0zm0-15a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 3 0zm9 6a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5M6 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zm13.425 8.925a1.5 1.5 0 0 0 0-2.122l-2.122-2.121a1.5 1.5 0 1 0-2.121 2.121l2.121 2.122a1.5 1.5 0 0 0 2.122 0M8.818 6.697a1.5 1.5 0 0 1-2.121 2.121L4.575 6.697a1.5 1.5 0 0 1 2.122-2.122zm10.607-2.122a1.5 1.5 0 0 0-2.122 0l-2.121 2.122a1.5 1.5 0 1 0 2.121 2.121l2.122-2.121a1.5 1.5 0 0 0 0-2.122M6.697 15.182a1.5 1.5 0 1 1 2.121 2.121l-2.121 2.122a1.5 1.5 0 0 1-2.122-2.122z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Loading2Fill'

/**
 * MingCute Icon: Loading 2 Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Loading2Fill = memo(Icon)
