//abhishek360

import React, { Component } from 'react';
import * as Colors from '../../configs/Colors';
import { connect } from 'react-redux';
import {
  Card,
  CardContent,
  Button,
  IconButton,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import {
  fetchListShopDetails,
  resetUpdateEmployee,
  fetchShopsList,
  toggleEnable,
} from '../../actions/AllShopsStateActions';
import {
  getShopId
} from '../../helpers/UsefullFunctions';
import {
  changeView,
} from '../../actions/ShopViewAction';


class ListShopsDetailsView extends Component{
  renderNoSelectedShop = () => {
    return (
      <div>
        <h2>No Shop Selected.</h2>
        <h3>Select a shop from Left to view details.</h3>
      </div>
    )
  }

  renderNoEmployee = () => {
    return (
      <div>
        <h2 style={{color: 'red'}}>No Employee! Add Employees to the Shop.</h2>
      </div>
    )
  }

  renderShipingAddress = (co, line1, line2, lat, long) => {
    return (
      <div style = {{}}>
        <div align = 'left' style = {{padding: '1px 20px 1px 20px', fontSize: 16}}>
          {line1}
        </div>
        <div align = 'left' style = {{padding: '1px 20px 1px 20px', fontSize: 16}}>
          {line2}
        </div>
        <div align = 'left' style = {{padding: '1px 20px 1px 20px', fontSize: 16}}>
          {co}
        </div>
      </div>
    )
  }

  renderEmployeeDetails = (employees) => {
    return (
      <div style={{width: '95%'}}>
        <hr/>
        <div style = {{display: 'flex', flexDirection: 'horizontal'}}>
          <div align = 'left' style = {{padding: '2px', fontSize: 18, flex: 1}}>
            Name
          </div>
          <div align = 'left' style = {{padding: '2px', fontSize: 18, flex: 2}}>
            Email
          </div>
          <div align = 'left' style = {{padding: '2px', fontSize: 18, flex: 1}}>
            Phone
          </div>
        </div>
        <hr/>
        {employees.length ? <div> {
              employees.map((emp, index) => {
                return (
                  <div
                    style = {{fontSize: 16, display: 'flex', flexDirection: 'horizontal', padding: '10px 5px'}}
                    key={emp.email}
                  >
                    <div style = {{flex: 1}} align="left">{emp.name}</div>
                    <div style = {{flex: 2}} align="left">{emp.email}</div>
                    <div style = {{flex: 1}} align="left">{emp.contact_number}</div>
                  </div>
                )
              })}
            </div> : this.renderNoEmployee()
        }
        <Button
            style = {{...styles.button, width: 160, padding: 5, margin: 10}}
            size = "small"
            onClick = {() => {
              this.props.changeView('addemployee');
            }}
          >
            Add Employee
        </Button>
      </div>
    )
  }

  refreshData = (success, shop_id) => {
    if(success){
      this.props.resetUpdateEmployee();
      this.props.fetchListShopDetails(shop_id);
    }
  }

  render(){
    const {shop_id, name, total_orders, registered_on,
      address_line_1, locality, landmark, city, zip_code, state, latitude,
      longitude, employees, enabled, in_radius} = this.props.listShopDetails;

    const {success} = this.props.updateEmployee;
    this.refreshData(success, shop_id);

    var line1 = address_line_1+', '+locality+', '+landmark;
    var co = "PIN: "+zip_code;
    var line2 = city+', '+state;
    var lat = latitude;
    var long = longitude;
    var registeredOn = registered_on.slice(0, registered_on.length-3);

    var isShopSelected = false;
    if(shop_id!==null&&shop_id!==''){
      isShopSelected = true;
    }

    return (
      <div
        style = {styles.container}
      >
        <Card style = {styles.photosCard}>
          <CardContent
            align = 'center'
            style = {styles.header}
          >
            <Button
              style = {{...styles.button, width: 120}}
              size = "small"
              onClick = {() => this.props.changeView('addshop')
              }
            >
              Add Shop
            </Button>
            <div
              style = {{flex: 1, fontSize: 25}}
            >
              Shop Details :
            </div>
            <IconButton
              style = {styles.button}
              size = "medium"
              onClick = {() => this.props.fetchListShopDetails(shop_id)}
            >
              <RefreshIcon />
            </IconButton>
          </CardContent>
          <CardContent style = {styles.contentCard}>
            {isShopSelected ? <div>
                    <div style = {{padding: 5, fontSize: 25, fontWeight: 'bold'}}>
                    Shop: {name}
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'horizontal'}}>
                      <div style = {{flex: 1, paddingLeft: 15}}>
                          <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                            Shop Id: {getShopId(shop_id)}
                          </div>
                          <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                            Orders Received: {total_orders}
                          </div>
                          <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                            Registered On: {registeredOn}
                          </div>
                          <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                            {
                            in_radius>0?
                            <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                              Shop Radius: {in_radius+' Km'}
                            </div>
                            :
                            <div align = 'left' style = {{padding: 3, fontSize: 20}}>
                              Shop Pick-up Only.
                            </div>
                            }
                          </div>
                      </div>
                      <div style = {{flex: 1, paddingLeft: 15}}>
                          <div align = 'left' style = {{padding: 5, paddingLeft: 20, fontSize: 20}}>
                            Shop Address:
                          </div>
                          {this.renderShipingAddress(co, line1, line2, lat, long)}
                      </div>
                    </div>
                    <hr/>
                    <div>
                      {enabled?
                      <div>
                        <p style={{color: Colors.DARK_GREEN, fontSize: 22, fontWeight: 'bold'}}>
                          SHOP IS ENABLED!
                          <Button
                            style = {{...styles.button, backgroundColor: Colors.RED, width: 100, padding: 5, margin: 10}}
                            size = "small"
                            onClick = {() => {
                              this.props.toggleEnable(shop_id);
                            }}
                          >
                            DISABLE SHOP
                          </Button>
                        </p>
                      </div>
                      :<div>
                        <p style={{color: Colors.RED, fontSize: 22, fontWeight: 'bold'}}>
                          SHOP IS DISABLED!
                          <Button
                            style = {{...styles.button, backgroundColor: Colors.DARK_GREEN, width: 100, padding: 5, margin: 10}}
                            size = "small"
                            onClick = {() => {
                              this.props.toggleEnable(shop_id);
                            }}
                          >
                            ENABLE SHOP
                          </Button>
                        </p>
                      </div>
                      }
                    </div>
                    <hr/>
                    <div align = 'center' style = {{padding: 20, fontSize: 20}}>
                      Employee Details
                    </div>
                    {this.renderEmployeeDetails(employees)}
                  </div> : this.renderNoSelectedShop()
                }
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = {
  container: {
    paddingLeft: 10,
    width: '98%'
  },
  header: {
    display: 'flex',
    flexDirection: 'horizontal',
    zIndex: 2,
    padding: 10,
    backgroundColor: Colors.FOREGROUND_2,
  },
  photosCard: {
    width: '100%'
  },
  contentCard: {
    minHeight: '15vh',
    width: '100%',
    padding: 5,
    backgroundColor: Colors.BACKGROUND
  },
  button: {
    width: 40,
    padding: 2,
    margin: 0,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY
  },
  statusText: {
    borderRadius: 3,
    padding: '5px 10px 5px 10px',
    margin: 5,
    backgroundColor: 'green',
    color: Colors.WHITE,
  },
};

const mapStateToProps = ({ listShopDetails, updateEmployee }) => ({ listShopDetails, updateEmployee });

export default connect(mapStateToProps, {
  fetchListShopDetails,
  changeView,
  resetUpdateEmployee,
  toggleEnable,
  fetchShopsList,
})(ListShopsDetailsView);
