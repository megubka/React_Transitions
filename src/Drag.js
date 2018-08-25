import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';

const AnimCard = Card.withComponent(animated.div);

export default class Drag extends Component {
  render() {
    return (
      <Gesture>
          {({ down, xDelta }) => (

            <Spring
                native
                to={{
                    x: down ? xDelta : 0
                }}
                immediate={name => down && name === "x"}
            >

                {({x}) => (
                    <AnimCard style={{
                        transform: x.interpolate(x => `translateX(${x}px)`)
                    }}>
                        <h1>Drag</h1>
                    </AnimCard>
                )}

            </Spring>
          )}
      </Gesture>
    )
  }
}
