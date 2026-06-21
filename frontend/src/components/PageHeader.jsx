import { Link } from "react-router-dom";

export default function PageHeader({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}) {
  return (
    <section className="page-header">
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-header__description">{description}</p>
      </div>
      <div className="page-header__actions">
        {secondaryAction ? (
          <Link className="button button--soft" to={secondaryAction.to}>
            {secondaryAction.label}
          </Link>
        ) : null}
        {primaryAction ? (
          <Link className="button button--primary" to={primaryAction.to}>
            {primaryAction.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
