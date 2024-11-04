import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "./Button.tsx";
import "./index.css";
import { RiStarLine } from "@remixicon/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="main-container">
      <div className="buttons-wrapper">
        <div className="row">
          <Button
            text="Button CTA"
            type="primary"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="primary"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="primary"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="primary"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="primary"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
        <div className="row">
          <Button
            text="Button CTA"
            type="secondary"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="secondary"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="secondary"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="secondary"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="secondary"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
        <div className="row">
          <Button
            text="Button CTA"
            type="tertiary"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="tertiary"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="tertiary"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="tertiary"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="tertiary"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
        <div className="row">
          <Button
            text="Button CTA"
            type="link-color"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="link-color"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="link-color"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="link-color"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="link-color"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
        <div className="row">
          <Button
            text="Button CTA"
            type="link-grey"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="link-grey"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="link-grey"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="link-grey"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="link-grey"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
        <div className="row">
          <Button
            text="Button CTA"
            type="destructive"
            size="medium"
            variant="text-only"
          />
          <Button
            text="Button CTA"
            type="destructive"
            size="large"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="left"
          />
          <Button
            text="Button CTA"
            type="destructive"
            size="xl"
            variant="text-with-icon"
            Icon={<RiStarLine size={20} />}
            iconPosition="right"
          />
          <Button
            text="Button CTA"
            type="destructive"
            size="xxl"
            variant="text-only"
          />
          <Button
            type="destructive"
            size="xxl"
            variant="icon-only"
            Icon={<RiStarLine size={24} />}
            ariaLabel="Star button"
          />
        </div>
      </div>
    </div>
  </StrictMode>
);
