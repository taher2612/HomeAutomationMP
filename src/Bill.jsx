import React from 'react';
import styled from '@emotion/styled';
import MenuBar from './MenuBar';
import ReactApexChart from 'react-apexcharts';

const Container = styled.div`
  height: 100vh;
  position: relative;
  background-size: cover;
  width: 500px;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      currentDate: this.formatCurrentDate(),
      chartDataMonthly: {
        options: {
          chart: {
            id: 'basic-bar',
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          },
        },
        series: [
          {
            color: '#2196F3', // Blue color for the first series
            name: '₹',
            data: [30, 40, 45, 50, 49],
          },
        ],
      },
      chartDataWeek: {
        options: {
          chart: {
            id: 'basic-bar',
          },
          xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
        },
        series: [
          {
            color: '#4CAF50', // Green color for the second series
            name: '₹',
            data: [10, 9, 4, 7, 4,6,8],
          },
        ],
      },
    };
  }

  formatCurrentDate() {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const [month, day, year] = formatter.format(new Date()).split(' ');

    // Add suffix to day
    const dayWithSuffix = this.addDaySuffix(parseInt(day));

    return `${dayWithSuffix} ${month}, ${year}`;
  }

  addDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return `${day}th`;
    }

    switch (day % 10) {
      case 1:
        return `${day}st`;
      case 2:
        return `${day}nd`;
      case 3:
        return `${day}rd`;
      default:
        return `${day}th`;
    }
  }

  render() {
    return (
      <>
        <Container>
          <div className="container">
            <div>
              <div className="bill-top-shadow"></div>

              <div className="row pt-5 justify-content-between  ">
                <div className="col-2 ms-2 text-black home-title align-center align-self-center ">
                  <h4>Bill</h4>
                </div>
                <div className="col-2  text-end text-white home-title">
                  <MenuBar />
                </div>
              </div>
              <div className="row pt-5 ">
                <div className="col  text-black ">
                  <div className='bill-date'> {this.state.currentDate}</div>
                </div>
              </div>
              <div className="row pt-5 ">
                <div className="col-12 text-black ">
                  <ReactApexChart
                    options={this.state.chartDataMonthly.options}
                    series={this.state.chartDataMonthly.series}
                    type="bar"
                    height={230}
                  />
                </div>
                <div className="col-12 text-black ">
                  <ReactApexChart
                    options={this.state.chartDataWeek.options}
                    series={this.state.chartDataWeek.series}
                    type="bar"
                    height={230}
                  />
                </div>

              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default Home;
