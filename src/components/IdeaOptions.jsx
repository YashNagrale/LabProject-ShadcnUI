import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

function IdeaOptions({ classes = "" }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <li className={`${classes} list-none`}>
          <a
            href="#startproject"
            className="font-semibold hover:text-white transition-colors duration-300"
          >
            Start Project
          </a>
        </li>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Do you have any content?</DrawerTitle>
          <DrawerDescription>Select one of the option</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="flex sm:flex-row items-center justify-center">
          <Button>I have a content</Button>
          <Button>I don't have a content</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default IdeaOptions;
