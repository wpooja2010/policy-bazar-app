import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Filter = () => {
  return (
    <>
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-2'>
            <h5 className='mt-2'>Quick Filter </h5>
          </div>
          <div className='col-10 mt-2'>
            <Tabs className="border-bottom-0">
              <TabList className="">
                <Tab>
                   <form class="d-flex" role="search">
                  <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />
                </form>
                </Tab>
                <Tab>sort</Tab>
                <Tab>Network (TPA)</Tab>
                <Tab>Network Hospitals</Tab>
                <Tab>Co-payment</Tab>
                <Tab>Medical Cover</Tab>
              </TabList>

              {/* <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 4</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 5</h2>
              </TabPanel> */}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter