import { NavLink, Outlet, useLocation } from "react-router-dom";
import { routes } from "../data/screens";

function MaterialIcon({ name }) {
  return <span className="material-symbols-outlined">{name}</span>;
}

const navIcons = {
  platform: "public",
  home: "home",
  dashboard: "dashboard",
  pricing: "payments",
  users: "group",
};

export default function AppShell() {
  const location = useLocation();
  const currentRoute =
    routes.find((route) => route.path === location.pathname) ?? routes[0];

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar__brand">
          <p className="sidebar__eyebrow">Institutional Access</p>
          <h1>EcoData Pro</h1>
          <p className="sidebar__caption">Predictive intelligence for global markets</p>
        </div>

        <nav className="sidebar__nav" aria-label="Primary">
          {routes.map((route) => (
            <NavLink
              key={route.key}
              className={({ isActive }) =>
                isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
              }
              to={route.path}
            >
              <MaterialIcon name={navIcons[route.key]} />
              <span>{route.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar__footer">
          <button className="button button--ghost button--full">
            <MaterialIcon name="download" />
            Export report
          </button>
          <div className="sidebar__meta">
            <span>Live project</span>
            <strong>{currentRoute.title}</strong>
          </div>
        </div>
      </aside>

      <div className="shell-main">
        <header className="topbar">
          <div>
            <p className="topbar__eyebrow">{currentRoute.eyebrow}</p>
            <h2>{currentRoute.title}</h2>
          </div>
          <div className="topbar__actions">
            <label className="search">
              <MaterialIcon name="search" />
              <input placeholder="Search indices, reports, policies..." />
            </label>
            <button className="icon-button" aria-label="Notifications">
              <MaterialIcon name="notifications" />
            </button>
            <div className="avatar-block">
              <div className="avatar-block__copy">
                <strong>Dr. Julian Vance</strong>
                <span>Chief Economist</span>
              </div>
              <div className="avatar-block__badge">JV</div>
            </div>
          </div>
        </header>

        <main className="page-frame">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
