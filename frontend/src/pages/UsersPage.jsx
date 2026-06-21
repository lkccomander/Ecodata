import PageHeader from "../components/PageHeader";
import RoutePager from "../components/RoutePager";
import { users } from "../data/screens";

function statusTone(status) {
  if (status === "Active") return "positive";
  if (status === "Suspended") return "negative";
  return "neutral";
}

export default function UsersPage() {
  return (
    <div className="page-stack">
      <PageHeader
        eyebrow="Operations Adaptation"
        title="Institutional user management"
        description="The admin screen is turned into the operational endpoint of the demo flow, connected to pricing and platform routes."
        primaryAction={{ label: "Invite user", to: "/users" }}
        secondaryAction={{ label: "Return to platform", to: "/" }}
      />

      <section className="metric-grid">
        {[
          ["Total users", "1,284", "+4%", "positive"],
          ["Active now", "412", "Live", "neutral"],
          ["Institutional seats", "12/15", "80%", "neutral"],
          ["Pending invites", "18", "Expiring", "negative"],
        ].map(([label, value, delta, tone]) => (
          <article key={label} className="metric-card metric-card--dashboard">
            <span>{label}</span>
            <strong>{value}</strong>
            <em className={`tone tone--${tone}`}>{delta}</em>
          </article>
        ))}
      </section>

      <section className="surface-card">
        <div className="surface-card__header surface-card__header--stack">
          <div>
            <p className="section-eyebrow">Directory</p>
            <h3>Institutional access roster</h3>
          </div>
          <div className="toolbar-strip toolbar-strip--tight">
            <button className="chip chip--active">All plans</button>
            <button className="chip">Active</button>
            <button className="chip">Suspended</button>
          </div>
        </div>

        <div className="user-table">
          <div className="user-table__head">
            <span>User</span>
            <span>Plan</span>
            <span>Status</span>
            <span>Last login</span>
          </div>
          {users.map((user) => (
            <div key={user.email} className="user-table__row">
              <div className="user-table__identity">
                <div className="user-pill">{user.initials}</div>
                <div>
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>
              </div>
              <span>{user.plan}</span>
              <em className={`tone tone--${statusTone(user.status)}`}>{user.status}</em>
              <span>{user.lastLogin}</span>
            </div>
          ))}
        </div>
      </section>

      <RoutePager routeKey="users" />
    </div>
  );
}
