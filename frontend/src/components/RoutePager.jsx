import { Link } from "react-router-dom";
import { routes } from "../data/screens";

export default function RoutePager({ routeKey }) {
  const index = routes.findIndex((route) => route.key === routeKey);
  const previous = routes[index - 1];
  const next = routes[index + 1];

  return (
    <nav className="route-pager" aria-label="Page navigation">
      {previous ? (
        <Link className="route-pager__card" to={previous.path}>
          <span className="route-pager__label">Previous</span>
          <strong>{previous.label}</strong>
        </Link>
      ) : (
        <div className="route-pager__card route-pager__card--muted">
          <span className="route-pager__label">Previous</span>
          <strong>Start of flow</strong>
        </div>
      )}

      {next ? (
        <Link className="route-pager__card route-pager__card--align-end" to={next.path}>
          <span className="route-pager__label">Next</span>
          <strong>{next.label}</strong>
        </Link>
      ) : (
        <div className="route-pager__card route-pager__card--muted route-pager__card--align-end">
          <span className="route-pager__label">Next</span>
          <strong>End of flow</strong>
        </div>
      )}
    </nav>
  );
}
