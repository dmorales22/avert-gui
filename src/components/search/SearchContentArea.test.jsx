import React from "react";
import renderer from "react-test-renderer";
import SearchContentArea from "./SearchContentArea";

it("Renders correctly", () => {
  const tree = renderer
    .create(<SearchContentArea setResults={() => {}} setQuery={() => {}} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <div>
      <div
        className="card-title"
      >
        Search
      </div>
      <div
        className="bp3-card bp3-elevation-2"
        style={
          Object {
            "padding": 8,
          }
        }
      >
        <div
          className="avert-row"
        >
          <div
            className="avert-block"
          >
            <div
              className="card-title"
            >
              Type
            </div>
            <div
              className="bp3-card bp3-elevation-2"
              style={
                Object {
                  "padding": 8,
                }
              }
            >
              <div
                className="avert-row"
              >
                <div
                  className="avert-block"
                >
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={true}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Still Screenshot
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Video
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Network Packet
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Process
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Keystroke
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Mouse Action
                  </label>
                </div>
                <div
                  className="avert-block"
                >
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={true}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Window History
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    System Call
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    History
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    Log
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    All
                  </label>
                  <label
                    className="bp3-control bp3-checkbox"
                  >
                    <input
                      checked={false}
                      onChange={[Function]}
                      type="checkbox"
                    />
                    <span
                      className="bp3-control-indicator"
                    />
                    All Artifact Types
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="avert-block"
          >
            <div
              className="card-title"
            >
              User Profile
            </div>
            <div
              className="bp3-card bp3-elevation-2"
              style={
                Object {
                  "padding": 8,
                }
              }
            >
              <div
                className=""
              >
                IP Address
              </div>
              <span
                className="bp3-popover-wrapper"
              >
                <span
                  aria-haspopup="true"
                  className="bp3-popover-target"
                  onClick={[Function]}
                >
                  <div
                    className=""
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                  >
                    <div
                      className="bp3-input bp3-tag-input bp3-multi-select"
                      onBlur={[Function]}
                      onClick={[Function]}
                    >
                      <div
                        className="bp3-tag-input-values"
                      >
                        <input
                          className="bp3-input-ghost bp3-multi-select-tag-input-input"
                          onChange={[Function]}
                          onFocus={[Function]}
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                          onPaste={[Function]}
                          placeholder="Search..."
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </span>
              </span>
              <div
                className=""
              >
                MAC Address
              </div>
              <span
                className="bp3-popover-wrapper"
              >
                <span
                  aria-haspopup="true"
                  className="bp3-popover-target"
                  onClick={[Function]}
                >
                  <div
                    className=""
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                  >
                    <div
                      className="bp3-input bp3-tag-input bp3-multi-select"
                      onBlur={[Function]}
                      onClick={[Function]}
                    >
                      <div
                        className="bp3-tag-input-values"
                      >
                        <input
                          className="bp3-input-ghost bp3-multi-select-tag-input-input"
                          onChange={[Function]}
                          onFocus={[Function]}
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                          onPaste={[Function]}
                          placeholder="Search..."
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
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
          <div
            className="avert-block"
          >
            <div
              className="card-title"
            >
              Search expression
            </div>
            <div
              className="bp3-card bp3-elevation-2"
              style={
                Object {
                  "padding": 8,
                }
              }
            >
              <div
                className=""
                style={
                  Object {
                    "marginBottom": 4,
                  }
                }
              >
                Expression
              </div>
              <div
                className="bp3-input-group"
              >
                <input
                  className="bp3-input"
                  onChange={[Function]}
                  placeholder="Enter your expression..."
                  style={
                    Object {
                      "paddingLeft": undefined,
                      "paddingRight": undefined,
                    }
                  }
                  type="text"
                />
              </div>
              <div
                className=""
                style={
                  Object {
                    "marginBottom": 4,
                    "marginTop": 8,
                  }
                }
              >
                Tags
              </div>
              <span
                className="bp3-popover-wrapper"
              >
                <span
                  aria-haspopup="true"
                  className="bp3-popover-target"
                  onClick={[Function]}
                >
                  <div
                    className=""
                    onKeyDown={[Function]}
                    onKeyUp={[Function]}
                  >
                    <div
                      className="bp3-input bp3-tag-input bp3-multi-select"
                      onBlur={[Function]}
                      onClick={[Function]}
                    >
                      <div
                        className="bp3-tag-input-values"
                      >
                        <input
                          className="bp3-input-ghost bp3-multi-select-tag-input-input"
                          onChange={[Function]}
                          onFocus={[Function]}
                          onKeyDown={[Function]}
                          onKeyUp={[Function]}
                          onPaste={[Function]}
                          placeholder="Search..."
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </span>
              </span>
            </div>
          </div>
          <button
            className="bp3-button bp3-intent-success"
            onBlur={[Function]}
            onClick={[Function]}
            onKeyDown={[Function]}
            onKeyUp={[Function]}
            type="button"
          >
            <span
              className="bp3-button-text"
            >
              Search
            </span>
            <span
              aria-hidden={true}
              className="bp3-icon bp3-icon-search"
              icon="search"
            >
              <svg
                data-icon="search"
                height={16}
                viewBox="0 0 16 16"
                width={16}
              >
                <path
                  d="M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
                  fillRule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  `);
});
