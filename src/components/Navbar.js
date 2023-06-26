import React from "react";
import {
  Alignment,
  Button,
  Classes,
  Icon,
  Navbar as Nav,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Switch,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";

import { Link } from "react-router-dom";

function Navbar({ setDark }) {
  return (
    <Nav>
      <NavbarGroup>
        <NavbarHeading>AVERT</NavbarHeading>
        <NavbarDivider />
        <Link to="/">
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
        </Link>
        <Link to="/sync">
          <Button className={Classes.MINIMAL} icon="refresh" text="Sync" />
        </Link>
        <Link to="/configuration">
          <Button className={Classes.MINIMAL} icon="cog" text="Configuration" />
        </Link>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Switch
          label={<Icon icon="moon" />}
          onChange={(e) => setDark(e.target.checked)}
        />
      </NavbarGroup>
    </Nav>
  );
}

export default Navbar;
