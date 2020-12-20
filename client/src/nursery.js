import { Home } from '@material-ui/icons';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

const Nursery = props => {
    const {params} = props.match.params.id
    return <p>Your results</p>
}
function nursery() {
    return(
        <div>
            <Navbar nursery ={this.state.nursery} />
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route path = '/nursery/id' render = {routerProps => this.renderNursery(router.props)}/>
                <Route component = {NotFound} />
             </Switch>
        </div>

    )
}

const NurseryDetail = (props) => {
    const { name } = props;
    const {address} = props;
    const {postcode} = props;
    const {writeUp} = props;
    const {ofsteadRating}= props;
  
    return (
      <>
          
        <p>{name}</p>
        <p>{address}</p>
        <p>{postcode}</p>
        <p>{writeUp}</p>
        <p>Ofstead Rating: {ofsteadRating}</p>
      </>
    );
  };

renderNursery = (routerProps) => {
    let nuseryId = parseInt(routerProps.match.params.id)
    let foundNursery = this.state.nursery.find(nurseryObj => nurseryObj.id === nursertId)
    return (foundNursery ? <Nursery nursery={foundNursery}/> :<Not Found/>)
}

const Nursery = ({nursery}) => {
    const nurseryStyle = {
        width:'200px',
        height: '200px',
    }
    return (
        <div>
            <p>Nursery Name {nursery.id}</p>
            <img style = {nurseryStyle}src = {nursery.imageUrl} alt = ''/>
        </div>
    )
}
export default nursery