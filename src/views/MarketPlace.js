import React from "react";

import Button from "../components/Button";
import CheckBox from "../components/CheckBox";

import Layout from "./layouts/Layout";

const stars = [1, 2, 3, 4, 5];

const initialRating = { 1: false, 2: false, 3: false, 4: false, 5: false };
const initialLevel = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
};

function MarketPlace() {
  const [starRating, setStarRating] = React.useState(initialRating);
  const [level, setLevel] = React.useState(initialLevel);

  return (
    <Layout>
      <div className="py-8">
        <h1 className="text-center text-3xl text-white my-12">Marketplace</h1>
        <div className="flex md:flex-row flex-col mx-6">
          <div className="flex flex-col bg-white bg-opacity-50 rounded-2xl p-6">
            <div className="my-2">
              <h1 className="font-bold">Find Your Monster!</h1>
            </div>
            <div className="my-1">
              <h1 className="font-bold">Star Rating</h1>
              {stars.map((i) => (
                <div className="my-1">
                  <CheckBox
                    checked={starRating[i] === true ? true : false}
                    onClick={() => {
                      let temp = { ...starRating };
                      temp[i] = !temp[i];
                      setStarRating(temp);
                    }}
                    key={i}
                  >
                    {[...Array(i).keys()].map((j) => (
                      <i className="material-icons color-yellow" key={j}>
                        star
                      </i>
                    ))}
                  </CheckBox>
                </div>
              ))}
            </div>
            <div className="my-1">
              <h1 className="font-bold">Level</h1>
              <div className="flex flex-row justify-between my-2">
                <CheckBox
                  checked={level[1] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[1] = !temp[1];
                    setLevel(temp);
                  }}
                >
                  1
                </CheckBox>
                <CheckBox
                  checked={level[2] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[2] = !temp[2];
                    setLevel(temp);
                  }}
                >
                  2
                </CheckBox>
                <CheckBox
                  checked={level[3] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[3] = !temp[3];
                    setLevel(temp);
                  }}
                >
                  3
                </CheckBox>
              </div>
              <div className="flex flex-row justify-between my-2">
                <CheckBox
                  checked={level[4] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[4] = !temp[4];
                    setLevel(temp);
                  }}
                >
                  4
                </CheckBox>
                <CheckBox
                  checked={level[5] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[5] = !temp[5];
                    setLevel(temp);
                  }}
                >
                  5
                </CheckBox>
                <CheckBox
                  checked={level[6] === true ? true : false}
                  onClick={() => {
                    let temp = { ...level };
                    temp[6] = !temp[6];
                    setLevel(temp);
                  }}
                >
                  6
                </CheckBox>
              </div>
            </div>
            <Button title="Filter" classes="p-1 m-4 bg-blue" />
          </div>
          <div className="flex flex-1 md:flex-row justify-center flex-col">
            {/* Start Block */}
            <div className="flex flex-col">
              <h1 className="text-white text-center text-xl mx-2 my-8">
                Minion
              </h1>
              <div className="text-center rounded-2xl bg-gray custom-border p-8 border-4 m-2">
                <div className="p-2 relative -top-16 arrow bg-blue">
                  <div className="bg-gray child-arrow p-2">
                    <span className="font-bold">Slander</span>
                  </div>
                </div>
                <div>
                  <i className="material-icons color-yellow">star</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                </div>
                <div className="font-bold">Level: 1/612 Exp</div>
                <div className="font-bold">Element: Fire</div>
                <div className="font-bold my-1">Owner id: A34500</div>
                <div className="font-bold text-xl my-1">3,000</div>
              </div>
              <Button title="Connect" classes="p-1 m-4 bg-blue" />
            </div>
            {/* End Block */}
            {/* Start Block */}
            <div className="flex flex-col">
              <h1 className="text-white text-center text-xl mx-2 my-8">
                Minion
              </h1>
              <div className="text-center rounded-2xl bg-gray custom-border p-8 border-4 m-2">
                <div className="p-2 relative -top-16 arrow bg-blue">
                  <div className="bg-gray child-arrow p-2">
                    <span className="font-bold">Slander</span>
                  </div>
                </div>
                <div>
                  <i className="material-icons color-yellow">star</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                </div>
                <div className="font-bold">Level: 1/612 Exp</div>
                <div className="font-bold">Element: Fire</div>
                <div className="font-bold my-1">Owner id: A34500</div>
                <div className="font-bold text-xl my-1">3,000</div>
              </div>
              <Button title="Connect" classes="p-1 m-4 bg-blue" />
            </div>
            {/* End Block */}
            {/* Start Block */}
            <div className="flex flex-col">
              <h1 className="text-white text-center text-xl mx-2 my-8">
                Minion
              </h1>
              <div className="text-center rounded-2xl bg-gray custom-border p-8 border-4 m-2">
                <div className="p-2 relative -top-16 arrow bg-blue">
                  <div className="bg-gray child-arrow p-2">
                    <span className="font-bold">Slander</span>
                  </div>
                </div>
                <div>
                  <i className="material-icons color-yellow">star</i>
                  <i className="material-icons color-yellow">star</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                  <i className="material-icons">star_border</i>
                </div>
                <div className="font-bold">Level: 1/612 Exp</div>
                <div className="font-bold">Element: Fire</div>
                <div className="font-bold my-1">Owner id: A34500</div>
                <div className="font-bold text-xl my-1">3,000</div>
              </div>
              <Button title="Connect" classes="p-1 m-4 bg-blue" />
            </div>
            {/* End Block */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MarketPlace;
