import React, { Component } from 'react'
import styled from 'styled-components'
import { Transition } from 'react-spring';
import { Portal, absolute } from 'Utilities'
import Icon from './Icon'
import { Card } from './Cards'

export default class Modal extends Component {
    render() {
        const { children, toggle, on } = this.props;
        return (
            <Portal>
                <Transition 
                    from={{ opacity: 0 , bgOpacity: 0, y: -50 }} 
                    enter={{ opacity: 1 , bgOpacity: 0.7, y: 0 }} 
                    leave={{ opacity: 0 , bgOpacity: 0, y: 50 }}
                >
                    {on && (
                        (styles) => (
                            <ModalWrapper style={{ ...styles }}>
                                <ModalCard style={{
                                    transform: `translate3d(0, ${styles.y}px, 0)`,
                                    ...styles
                                }}>
                                    <CloseButton onClick={toggle}>
                                        <Icon name="close" />
                                    </CloseButton>
                                    <div>{children}</div>
                                </ModalCard>
                                <Background  style={{ opacity: styles.bgOpacity }} onClick={toggle} />
                            </ModalWrapper>
                        )
                    )}
                </Transition>
            </Portal>
        )
    }
}

const ModalWrapper = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalWindow = styled.div`
    position: relative;
`;

const ModalCard = Card.extend`
    position: relative;
    z-index: 1;
    min-width: 320px;
    margin-bottom: 100px;
`;

const CloseButton = styled.button`
    ${absolute({
        y: 'top',
        x: 'right'
    })};
    border: none;
    background: transparent;
    padding: 10px;
`;

const Background = styled.div`
    ${absolute({})};
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;
`;