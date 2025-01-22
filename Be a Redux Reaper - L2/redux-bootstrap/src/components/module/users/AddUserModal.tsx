import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { addUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useState } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export function AddUserModal() {
  const [open, setOpen] = useState(false);

  const form = useForm();

  const dispatch = useAppDispatch();


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    dispatch(addUser(data as IUser)); //| for taskSlice
    
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
          <DialogDescription className="sr-only">
            Fill up this form to add User
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                    {/* must provide field or else the form will become uncontrolled and will not work accordingly */}
                  </FormControl>
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button className="mt-5" type="submit">
                Add User
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
