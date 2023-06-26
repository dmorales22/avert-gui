import React from "react";
import renderer from "react-test-renderer";
import DateAndTimeContentArea from "./DateAndTimeContentArea";

it("Renders correctly", () => {
  const tree = renderer.create(<DateAndTimeContentArea />).toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div
      className="avert-block"
    >
      <div
        className="card-title"
      >
        Date and time
      </div>
      <div
        className="bp3-card bp3-elevation-2"
        style={
          Object {
            "padding": 8,
          }
        }
      >
        <span
          className="bp3-popover-wrapper"
        >
          <span
            aria-haspopup="true"
            className="bp3-popover-target"
            onClick={[Function]}
          >
            <div
              className="bp3-control-group"
            >
              <div
                className="bp3-input-group"
              >
                <input
                  autoComplete="off"
                  className="bp3-input"
                  disabled={false}
                  onBlur={[Function]}
                  onChange={[Function]}
                  onClick={[Function]}
                  onFocus={[Function]}
                  onKeyDown={[Function]}
                  onMouseDown={[Function]}
                  placeholder="Start date"
                  style={
                    Object {
                      "paddingLeft": undefined,
                      "paddingRight": undefined,
                    }
                  }
                  type="text"
                  value=""
                />
              </div>
              <div
                className="bp3-input-group"
              >
                <input
                  autoComplete="off"
                  className="bp3-input"
                  disabled={false}
                  onBlur={[Function]}
                  onChange={[Function]}
                  onClick={[Function]}
                  onFocus={[Function]}
                  onKeyDown={[Function]}
                  onMouseDown={[Function]}
                  placeholder="End date"
                  style={
                    Object {
                      "paddingLeft": undefined,
                      "paddingRight": undefined,
                    }
                  }
                  type="text"
                  value=""
                />
              </div>
            </div>
          </span>
        </span>
      </div>
    </div>
  `);
});
