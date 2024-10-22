import {StyledContainer} from './StyledContainer';

function Container({display, direction, gap, margin, padding, width, media, vertical, horizontal, className, children}) {
  return (
      <StyledContainer
        display={display}
        direction={direction}
        gap={gap}
        margin={margin}
        padding={padding}
        width={width}
        media={media}
        vertical={vertical}
        horizontal={horizontal}
        className={className}
        >
        {children}
      </StyledContainer>
  );
}

export default Container;
