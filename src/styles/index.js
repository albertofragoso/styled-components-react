import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.type === 'ghost' ? 'transparent' : 'palevioletred'};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: ${props => props.type === 'ghost' ? 'palevioletred' : 'white'};;
  margin: 0 1em;
  padding: 0.25em 1em;
`

export const Card = styled.article`
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  justify-content: space-around;

  &:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  h2{
    font-size: 1.5rem;
    color: grey;
  }
  p{
    text-align:justify;
    padding: 0 1rem;
  }
  nav{
    display: flex;
    justify-content: space-evenly;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`