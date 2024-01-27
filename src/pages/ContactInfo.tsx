import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"

// const formSchema = z.object({
//   name: z.string().min(2, {
//     message: "Your name must be at least 2 characters.",
//   }),
//   email: z.string().min(2, {
//     message: "Your name must be at least 2 characters.",
//   }),
// })

const ContactInfo = () => {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //   },
  // })

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values)
  // }

  return (
    <div className="flex justify-center items-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="w-full sm:w-[210px] sm:h-[180px] transition-transform transform hover:scale-105 shadow-md">
          <CardHeader>
            <CardTitle className="">
              <img src="./linkedin.svg" className="h-10 w-10" />
              LinkedIn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="https://www.linkedin.com/in/mcstich?trk=profile-badge">
              <Button className="bg-gray-950 text-white px-4 py-2 rounded-full text-sm">
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-full sm:w-[210px] sm:h-[180px] transition-transform transform hover:scale-105 shadow-md">
          <CardHeader>
            <CardTitle>
              <img src="./github.svg" className="h-10 w-10" />
              GitHub
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="https://github.com/stichmc">
              <Button className="bg-gray-950 text-white px-4 py-2 rounded-full text-sm">
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-full sm:w-[210px] sm:h-[180px] transition-transform transform hover:scale-105 shadow-md">
          <CardHeader>
            <CardTitle>
              <img src="./stack-overflow.svg" className="h-10 w-10" />
              Stack Overflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link to="https://stackoverflow.com/users/21374669/stichmc">
              <Button className="bg-gray-950 text-white px-4 py-2 rounded-full text-sm">
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="w-full sm:w-[210px] sm:h-[180px] transition-transform transform hover:scale-105 shadow-md">
          <CardHeader>
            <CardTitle>
              <img src="./outlook.svg" className="h-10 w-10" />
              Email
            </CardTitle>
            <CardDescription>mcstich@outlook.com</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="mailto:mcstich@outlook.com">
              <Button className="bg-gray-950 text-white px-4 py-2 rounded-full text-sm">
                View Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* <Card className="w-full sm:col-span-2 md:col-span-3 transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle>Direct Message</CardTitle>
            <CardDescription>Instead of contacting me through my other contact methods, feel free to directly message me here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="rounded-full">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card> */}
    </div>
  );
};

export default ContactInfo;
